var Friend = function(){
  this.hasTheApp = false;
  this.incognito = false;
};

Friend.prototype.inMongodb = function() {
// we will need to make that method acts like an if-statement. If in db, then...
  this.hasTheApp = true;
};