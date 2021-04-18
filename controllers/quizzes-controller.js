/* controllers only deal with http, they dont actually 'do anything' . they only know how to respond to a URL. 
they dont hold data. the service holds data */

/* interactions start at the controller */

const quizService = require("../services/quiz-service");

module.exports = (app) => {
  const findAllQuizzes = (req, res) => {
    quizService.findAllQuizzes().then((quizzes) => {
      res.send(quizzes);
    });
  };

  const findQuizById = (req, res) => {
    const quizId = req.params["quizId"];
    quizService.findQuizById(quizId).then((quiz) => {
      res.send(quiz);
    });
  };

  app.get("/api/quizzes", findAllQuizzes);
  app.get("/api/quizzes/:quizId", findQuizById);
};