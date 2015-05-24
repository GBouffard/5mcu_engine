describe('Friend', function(){
  var friend;
  beforeEach(function(){
    friend = new Friend;
    // we will assume right away that we have a friend with the app
    friend.inMongodb();
  });

  it('can have the 5mcu app', function(){
    expect(friend.hasTheApp).toBe(true);
  });

  it('can be on incognito mode', function(){
    friend.switchIncognito();
    expect(friend.incognito).toBe(true);
  });

  it('authorise 5mcu to check his location if authorised', function(){
    friend.authorised();
    expect(friend.authoriseLocation).toBe(true);
  });

  it('does not authorise 5mcu to check his location if not authorised', function(){
    friend.switchIncognito();
    friend.authorised();
    expect(friend.authoriseLocation).toBe(false);
  });

  it('has a blacklist of his/her own', function(){
    expect(friend.blacklist).toEqual([]);
  });
});