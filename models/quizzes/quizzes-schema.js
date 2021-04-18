const mongoose = require("mongoose")
const quizzes = mongoose.Schema({
    _id: String,
    title: String,
}, {collection: "quizzes"});

module.exports = quizzesSchema;