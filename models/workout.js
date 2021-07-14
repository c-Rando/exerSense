const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
    day: { type: Date, default: new Date() },
    exercises: [
        {
            type: { type: String },
            name: String,
            duration: Number,
            distance: Number,
            weight: Number,
            reps: Number,
            sets: Number,
        }
    ]
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
