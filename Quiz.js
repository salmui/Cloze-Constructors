var BasicCard = require ("./BasicCard.js");
var ClozeCard = require ("./ClozeCard.js");
var inquirer = require ("inquirer");
var fs = require ("fs");

var Quiz = function(makeCardMenu) {
  this.myMakeCardMenu = makeCardMenu;
  this. openquiz = function() {
      var quizArray = [];
      fs.readFile("quiz.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
      var cards = cards
      for (var i = 0; i < cards.length; i++) {
        var eachCard = card[i].split(',');
        if (eachCard[0] === 'Basic') {
          quizArray.push(new BasicCard(eachCard[1], eachCard[2]));
        else if (eachCard[0] === 'Cloze') {
          quizArray.push(new ClozeCard(eachCard[1], eachCard[2]));
        }
        }
    });
  };

  this.flashcard = function(index) {
    if (index < quizArray.length) {
      inquirer.prompt([
        {
          name: 'answer',
          message: quizArray[index].getQuestion()
        }
      ]).then(function(answers) {
        var check = quizArray[index].checkAnswer(answers.answer);
        if (correct) {
          console.log("You are correct!");
        }
        else {
          console.log("That is incorrect!");
        }
        console.log(quizArray[index].getAnswer());
      }
    };
  };

module.exports = Quiz;
