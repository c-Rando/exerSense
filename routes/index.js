const express = require('express');
const htmlRoutes = require('./htmlRoutes');
const workouts = require('./workouts');

const router = express.Router();

router.use('/', htmlRoutes);
router.use('/api', workouts);

module.exports = router;
