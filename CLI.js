var BasicCard = require ("./BasicCard.js");
var ClozeCard = require ("./ClozeCard.js");
var inquirer = require ("inquirer");
var fs = require ("fs");
var Quiz = require("./Quiz");

var answers = "";
//User can choose to create Basic Flashcard, Cloze Flashcard, or take a Quiz.
inquirer.prompt([
  {
    name: "type",
    message: "What type of flashcard would you like to create?"
    type: "list",
    choices: ['Basic', 'Cloze', 'Quiz']
  }
]).then(function(answers) {
  answer = answers.type;
  chooser(answer);

});

var basicCards = [];
var clozeCards = [];
var loop = 1;

var myBasicCards = new BasicCard();
var myClozeCards = new ClozeCard();

function chooser(choice) {
  if (choice === "basic") {
    myBasicCards.getUserInput();
  }
  else if (choice === "cloze") {
    myClozeCards.getUserInput();
  }
});
};
