const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// env setup
const connection = require("./db/db");
const PORT = process.env.PORT || 5000;

// routes
const users = require("./routes/users");
const exercises = require("./routes/exercises");
const auth = require("./middleware/auth");

// connect to mongodb instance
connection();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api/register", users);
app.use("/api/exercises", exercises);

app.get("/", auth, (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  return res.status(200).send("HI");
});

// listening on dev/prod port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
