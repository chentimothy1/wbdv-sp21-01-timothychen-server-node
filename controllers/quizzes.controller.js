/* controllers only deal with http, they dont actually 'do anything' . they only know how to respond to a URL. 
they dont hold data. the service holds data */

const quizService = require('../services/quiz-service')

module.exports = (app) => {

    //functions that actually retrieve all the quizzes
  const findAllQuizzes = (req, res) => {
    res.send(quizService.findAllQuizzes());
  }
  const findQuizById = (req, res) => {
    const quizId = req.params['qid'];
    const quiz = quizService.findQuizById(quizId);
    res.json(quiz);
  }

  app.get('/api/quizzes', findAllQuizzes)
  app.get('/api/quizzes/:qid', findQuizById)
}