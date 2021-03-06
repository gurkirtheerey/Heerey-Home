const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
// env setup
const connection = require("./db/db");
const PORT = process.env.PORT || 5000;

// routes
const users = require("./routes/users");
const exercises = require("./routes/exercises");
const auth = require("./middleware/auth");
const User = require("./models/Users");

// connect to mongodb instance
connection();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/register", users);
app.use("/api/exercises", exercises);

app.get("/api", auth, async (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  const data = jwt.verify(token, process.env.HEEREY_HOME_KEY);
  const username = data.username;
  if (username) {
    const resp = await User.findOne({ username });
    const user = {
      email: resp.email,
      username: resp.username,
      goal: resp.goal,
    };
    if (token && user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "Bad Request" });
    }
  }
});

// listening on dev/prod port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
