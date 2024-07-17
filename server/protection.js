// authMiddleware.js
const { verifyToken } = require('./jwt');

const   authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.sendStatus(401); // No token

  const user = verifyToken(token);
  if (!user) return res.sendStatus(403); // Invalid token

  req.user = user;
  next();
};

module.exports = authenticateToken;
