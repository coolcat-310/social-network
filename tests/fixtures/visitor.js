const mongoose = require('mongoose');

const visitorOne = {
    _id: new mongoose.Types.ObjectId(),
    name: "test",
    type: "Divisional Visit",
    customer_program: "test",
    attendees: "test",
    meeting_location: "test",
    start_date: "2019-07-29T07:00:00.000Z",
    end_date: "2019-12-12T07:00:00.000Z",
    purpose: "test",
};

const visitorTwo = {
    name: "Second Visitor",
    type: "Divisional Visit",
    customer_program: "test",
    attendees: "Molly Sharon",
    meeting_location: "Santa Monica",
    start_date: "2019-08-28T07:00:00.000Z",
    end_date: "2019-09-01T07:00:00.000Z",
    purpose: "Testing",
};

const visitorThree = {
    name: "Client MadeUpTon",
    type: "Divisional Visit",
    customer_program: "test",
    attendees: "none",
    meeting_location: "malibu",
    start_date: "2019-07-28T07:00:00.000Z",
    end_date: "2020-07-01T07:00:00.000Z",
    purpose: "Testing",
};

module.exports = {visitorOne, visitorTwo, visitorThree};