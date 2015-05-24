describe('Friend', function(){
  var friend;
  beforeEach(function(){
    friend = new Friend();
  });

  it('can have the 5mcu app', function(){
    friend.inMongodb();
    expect(friend.hasTheApp).toBe(true);
  });

  it('can be on incognito mode', function(){
    friend.switchIncognito();
    expect(friend.incognito).toBe(true);
  });

  it('authorise 5mcu to check his location if authorised', function(){
    friend.inMongodb();
    friend.authorised();
    expect(friend.authoriseLocation).toBe(true);
  });

  xit('does not authorise 5mcu to check his location if not authorised', function(){
    
  });

  xit('has a blacklist of his/her own', function(){

  });
});