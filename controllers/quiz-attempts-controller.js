const quizAttemptDAO = require("../daos/quiz-attempts-dao");

module.exports = (app) => {
    const createAttempt = (req, res) => {
        quizId = req.params.quizId;
        quizAttemptDAO
            .createAttempt(quizId, req.body)
            .then((attempt) => res.send(attempt));
    };

    const findAttemptsForQuiz = (req, res) => {
        quizId = req.params.quizId;
        quizAttemptDAO
            .findAttemptsForQuiz(quizId)
            .then((attempts) => res.send(attempts));
    };

    app.post("/api/quizzes/:quizId/attempts", createAttempt);
    app.get("/api/quizzes/:quizId/attempts", findAttemptsForQuiz);
};