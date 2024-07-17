const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const authenticateToken = require('../protection'); // Import the middleware


router.get('/', userController.getAllUsers);
router.get('/:name', userController.getUserById);
router.post('/up', userController.createUser);
router.post('/login', userController.login)
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
