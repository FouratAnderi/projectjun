const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likesController');
const authenticateToken = require('../protection'); // Import the middleware


router.get('/',authenticateToken, likeController.getAllLikes);
router.get('/:id',authenticateToken, likeController.getLikeById);
router.post('/',authenticateToken, likeController.createLike);
router.delete('/:id',authenticateToken, likeController.deleteLike);

module.exports = router;
