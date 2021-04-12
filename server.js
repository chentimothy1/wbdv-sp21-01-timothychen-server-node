const express = require("express");
const app = express();

//configure CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, X-Requested-With, Origin"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

// const quizController = require("./controllers/quizzes-controller");
// quizController(app);
require("./controllers/quizzes-controller")(app);

// const questionsController = require("./controllers/questions-controller");
// questionsController(app);
require("./controllers/questions-controller")(app);

app.listen(3001);