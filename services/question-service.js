const questionsDAO = require("../daos/questions-dao");

const findAllQuestions = () => {
  return questionsDAO.findAllQuestions();
};

const findQuestionById = (questionId) => {
  return questionsDAO.findQuestionById(questionId);
};

const findQuestionsForQuiz = (quizId) => {
  return questionsDAO.findQuestionsForQuiz(quizId);
};

module.exports = {
  findAllQuestions,
  findQuestionById,
  findQuestionsForQuiz,
};