const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/whiteboard-01', 
  {useNewUrlParser: true, useUnifiedTopology: true});

//configure CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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

// const questionsController = require("./controllers/questions-controller");
// questionsController(app);

require("./controllers/quizzes-controller")(app);
require("./controllers/questions-controller")(app);
require("./controllers/quiz-attempts-controller")(app);

app.listen(3000);
