var inquirer = require("inquirer");
var fs = require("fs");

var Flashcard = function(makeCardMenu) {
  this.myMakeCardMenu = makeCardMenu;
}

//creating Basic Flashcard
  this.createBasic = function() {
    inquirer.prompt([
      {
        name: "front",
        message: "Question: "
      }, {
        name: "back",
        message: "Answer: "
      }
    ]).then(function(answers) {
      logFlashCards("Basic" + "answers.front" + "answers.back");
      this.anotherCard('basic');
    });
  };

//creating Cloze Flashcard
  this.createCloze = function() {
    inquirer.prompt([
      {
        name: "text",
        message: "Full Text: "
      }, {
        name: "cloze",
        message: "Cloze Text: "
      }
    ]).then(function(answers) {
      logFlashCards("Basic" + "answers.text" + "answers.cloze");
      this.anotherCard('cloze');
    });
  };

//Create another flashcard
  this.anotherCard = function(card) {

    inquirer.prompt([
    {
    type: "confirm",
    message: "Create another flashcard?",
    name: "anotherCard",
    default: true
    }
    ]).then(function(answers) {
      //if they want to make another flashcard
      if (answers.anotherCard) {
        if (card === 'basic') {
         this.createBasic();
        } else {
          this.createCloze();
        }
    });
  };
  };


//Log Flashcards
  logFlashCards = function(card) {
  fs.appendFile("quiz.txt",card, function(err) {
    if (err) {
      return console.log(err);
      }
    });
  };

  module.exports = Flashcards;
    }
