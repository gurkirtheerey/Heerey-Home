require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");

router.post(
  "/login",
  [
    body("username").isLength({ min: 6 }),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res, next) => {
    const { username, password } = req.body;
    let email;
    try {
      // find user in db by username
      const savedUser = await User.findOne({ username });
      if (savedUser) {
        email = savedUser.email;
      }
      // if no user exists
      if (!savedUser) {
        return res.status(401).send("Invalid username/password combo...");
      }

      // compare user passwords
      const userHashedPass = savedUser.hashedPassword;
      const isSamePassword = await bcrypt.compare(password, userHashedPass);
      const SECRET = process.env.HEEREY_HOME_KEY;
      if (isSamePassword) {
        const user = { email, username };
        const token = jwt.sign(user, SECRET, { expiresIn: "30m" });
        return res.status(200).json({ user, token });
      } else {
        return res.status(401).json("Invalid username/password combo...");
      }
    } catch (e) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    return res.status(200).json({ username, password });
  }
);

router.post(
  "/",
  [
    body("email").isEmail(),
    body("username").isLength({ min: 6 }),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res, next) => {
    // express validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // get user details and jwt key
    const SECRET = process.env.HEEREY_HOME_KEY;
    const { email, username, password } = req.body;

    // save user to mongo and create jwt
    try {
      const existingUser = await User.find({ email });

      // if no user exists with this email
      if (!existingUser.length) {
        let hashedPassword = await bcrypt.hash(password, 10);
        let user = { email, username, hashedPassword },
          newUser = new User({ email, username, hashedPassword });
        // save user and create token
        await newUser.save();
        const token = jwt.sign(user, SECRET, { expiresIn: "30m" });

        return res.status(200).json({ user, token });
      } else {
        return res.status(404).json({
          message: `${email} is already registered to another account. Please try again...`,
        });
      }
    } catch (e) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

module.exports = router;
