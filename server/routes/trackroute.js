const express = require('express');
const router = express.Router();
const trackController = require('../controllers/tracksController');
// const authenticateToken = require('../protection'); // Import the middleware


router.get('/', trackController.getAllTracks);
// router.get('/:id',trackController.getTrackById);
router.get('/:name',trackController.getTrackByName);
router.post('/', trackController.createTrack);
router.put('/:id', trackController.updateTrack);
router.delete('/:id',trackController.deleteTrack);

module.exports = router;


// trackroute.js
// const express = require('express');
// const router = express.Router();
// const trackController = require('../controllers/tracksController');
// const authenticateToken = require('../authMiddleware'); // Import the middleware

// router.get('/', authenticateToken, trackController.getAllTracks);
// router.get('/:id', authenticateToken, trackController.getTrackById);
// router.post('/', authenticateToken, trackController.createTrack);
// router.put('/:id', authenticateToken, trackController.updateTrack);
// router.delete('/:id', authenticateToken, trackController.deleteTrack);

// module.exports = router;
