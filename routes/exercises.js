const express = require("express");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const router = express.Router();

router.get("/", auth, async (req, res, next) => {
  return res.status(200).send("Exercise List...");
});

router.post("/setgoal", auth, async (req, res, next) => {
  try {
    const { goal } = req.body;
    if (goal) {
      const header = req.headers["authorization"];
      const token = header && header.split(" ")[1];
      const data = jwt.verify(token, process.env.HEEREY_HOME_KEY);
      const user = await User.findOne({ username: data.username });
      user.goal = goal;
      await user.save();
      return res.status(200).json({ message: "Goal Saved!", goal });
    }
    return res.status(403).json({ message: "Forbidden..." });
  } catch (e) {
    return res.status(404).json({ message: "Error Saving User's Goal" });
  }
});

module.exports = router;
