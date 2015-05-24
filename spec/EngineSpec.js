// Engine refers to the user and his/her parameters
// has the same parameters as the friend. Any way to use that like a module?
describe('Engine',function(){
  var engine;
  beforeEach(function(){
    engine = new Engine;
  });

  describe('user options', function(){
    xit('has a default set distance', function(){

    });

    xit('can define a new set distance', function(){

    });

    xit('can put a friend on blacklist', function(){

    });
  });

  describe('authorisations', function(){
    xit('knows if it is authorised to access a friend via his/her settings', function(){

    });

    xit('knows if it is denied to access a friend via the user blacklist', function(){

    });

    xit('knows if a friend denies access to the user via his/her blacklist', function(){

    });
    xit('knows if full access to a friend is authorised', function(){

    });  
  });

  describe('user engine', function(){
    // we will mock a friend in here and set all authorsiations to be ok.
    xit('knows a friend location', function(){

    });

    xit('can return the distance between the user and his/her friend', function(){

    });

    xit('knows if a given friend is within set distance', function(){

    });
  });  
});

// if within distance, it shows the friend, his profile can be clicked, messages sent and notifications received but this is views & html.
// Context: setting up an event and yelp to look into if we have time.