// require file systems
var fs = require("fs");

function ClozeCard (text, cloze) {
  if (text.includes(cloze)) {
    this.cloze = cloze;
    this.partial = this.fulltext.replace(this.cloze, "...");
    this.fulltext = text;
  }
  else {
    return new ClozeCard(text, cloze);
  }
}

ClozeCard.prototype.printCloze = function() {
  console.log(this.cloze);
}

ClozeCard.prototype.printFullText = function() {
  console.log(this.fulltext);
}

ClozeCard.prototype.printPartial = function() {
  console.log(this.partial);
}

module.exports = ClozeCard;
