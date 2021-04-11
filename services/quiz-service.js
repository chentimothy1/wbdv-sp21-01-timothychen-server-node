let quizzes = require("./quizzes.json");

// const createQuiz = () => {}
// const updateQuiz = () => {}
// const deleteQuiz = () => {}
const findAllQuizzes = () => quizzes;
const findQuizById = (quizId) => quizzes.find((quiz) => quiz._id === quizId);

module.exports = {
  findAllQuizzes,
  findQuizById,
};