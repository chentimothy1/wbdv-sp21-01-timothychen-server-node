const questionService = require("../services/question-service");

module.exports = (app) => {
    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions().then((questions) => {
            res.send(questions);
        });
    };

    const findQuestionById = (req, res) => {
        const questionId = req.params["questId"];
        questionService.findQuestionById(questionId).then((question) => {
            res.send(question);
        });
    };

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params["quizId"];
        questionService.findQuestionsForQuiz(quizId).then((questions) => {
            res.send(questions);
        });
    };

    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:questId", findQuestionById);
    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);
};