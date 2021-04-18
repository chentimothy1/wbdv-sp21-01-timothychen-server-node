const mongoose = require("mongoose")
const quizzes = mongoose.Schema({
    _id: String,
    title: String,
    courseId, String,
    questions: [
        {
            type: String,
            ref: "QuestionsModel",
        },
    ],
}, {collection: "quizzes"}
);

module.exports = quizzesSchema;