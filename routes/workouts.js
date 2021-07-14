const db = require('../models');
const express = require('express');

const router = express.Router();

router.get('/workouts', async (req, res) => {

    const response = await db.Workout.aggregate([
        {
            $addFields: {
              totalDuration: { $sum: "$exercises.duration" },
              totalDistance: { $sum: "$exercises.distance" },
            }
        }
    ]);

    res.json(response);

});

router.post('/workouts', async (req, res) => {
    console.log(req.body);
    const newWorkout = await db.Workout.create({ day: new Date(), exercises: [] });
    res.json(newWorkout);
});

router.get('/workouts/range', async (req, res) => {
    res.redirect('/api/workouts');
});

router.get('/workouts/:id', async (req, res) => {
    const response = await db.Workout.findOne({ _id: req.params.id });
    res.json(response);
});

router.put('/workouts/:id', async (req, res) => {
    try {
        const workout = await db.Workout.findOne({ _id: req.params.id });
        if (!workout) {
            return res.status(404).send('Not Found');
        }
    
        workout.exercises.push(req.body);
        await workout.save();
    
        res.json('OK');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = router;
