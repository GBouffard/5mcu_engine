var Friend = function(){
  this.hasTheApp = false;
  this.incognito = false;
};

Friend.prototype.inMongodb = function() {
// we will need to make that method acts like an if-statement. If in db, then...
  this.hasTheApp = true;
};

Friend.prototype.switchIncognito = function() {
  this.incognito = !this.incognito;
};

Friend.prototype.authorised = function() {
  if ((this.hasTheApp === true) && (this.incognito === false)) return this.authoriseLocation = true;
  return this.authoriseLocation = false;
};