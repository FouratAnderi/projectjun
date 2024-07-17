// jwt.js
const jwt = require('jsonwebtoken');

const SECRET_KEY = "abcdefg123456"; // Change this to a strong secret

// Function to generate a JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.iduser }, SECRET_KEY);
};

// Function to verify a JWT
const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

module.exports = { generateToken, verifyToken };
