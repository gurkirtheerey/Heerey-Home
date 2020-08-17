const jwt = require("jsonwebtoken");

const authenticateJWT = async (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (token === null) return res.status(401);
  jwt.verify(token, process.env.HEEREY_HOME_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
};

module.exports = authenticateJWT;
