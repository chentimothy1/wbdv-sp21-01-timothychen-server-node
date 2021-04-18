let quizzes = require("./quizzes.json");

const quizzesModel = require("../../models/quizzes/quizzes-model")

// const createQuiz = () => {}
// const updateQuiz = () => {}
// const deleteQuiz = () => {}

const findAllQuizzes = () => {
  quizzesModel.find()
}

const findQuizById = (quizId) => quizzes.find((quiz) => quiz._id === quizId);

module.exports = {
  findAllQuizzes,
  findQuizById,
};