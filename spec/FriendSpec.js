describe('Friend', function(){
  var friend;
  beforeEach(function(){
    friend = new Friend();
  });

  it('can have the 5mcu app', function(){
    friend.inMongodb();
    expect(friend.hasTheApp).toBe(true);
  });

  xit('can be on incognito mode', function(){

  });

  xit('authorise 5mcu to check his location if authorised', function(){

  });

  xit('does not authorise 5mcu to check his location if not authorised', function(){
    
  });

  xit('has a blacklist of his/her own', function(){

  });
});