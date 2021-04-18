/* controllers only deal with http, they dont actually 'do anything' . they only know how to respond to a URL. 
they dont hold data. the service holds data */

/* interactions start at the controller */

const quizService = require('../services/quiz-service')

module.exports = (app) => {

  const findAllQuizzes = (req, res) => {
    // res.send(quizService.findAllQuizzes());

    quizService.findAllQuizzes()
      .then((quiz) => {
          res.send(quiz)
      })
  }

  const findQuizById = (req, res) => {
    const quizId = req.params['quizId'];
    const quiz = quizService.findQuizById(quizId);
    res.json(quiz);
  }

  app.get('/api/quizzes', findAllQuizzes)
  app.get('/api/quizzes/:quizId', findQuizById)
}