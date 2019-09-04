const mongoose = require('mongoose');

/**
 * Training as describe to have the following attributes: course_title {String}, training_type {String}, date {Date},
 *  instructor {String}, number_of_session {Number}, hours_per_class {Number}, employee_population {Number}
 */
const trainingSchema = new mongoose.Schema({
    course_title: {
        type: String,
        required: true,
        trim: true
    },
    training_type: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    instructor: {
        type: String,
        trim: true
    },
    number_of_session: {
        type: Number
    },
    hours_per_class: {
        type: Number
    },
    employee_population:{
        type: Number
    }
});

const Training = mongoose.model('Training', trainingSchema);

module.exports = Training;