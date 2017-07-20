function BasicCard (front, back) {
  this.front = front,
  this.back = back

}
else {
  return new BasicCard(front, back);
}

BasicCard.prototype.printfront = function() {
  console.log(this.front);
}

BasicCard.prototype.printback = function() {
  console.log(this.back);
}


module.exports = BasicCard;
