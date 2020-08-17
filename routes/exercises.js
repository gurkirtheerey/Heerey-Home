const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res, next) => {
  return res.status(200).send("Exercise List...");
});

module.exports = router;
