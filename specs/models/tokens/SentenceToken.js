describe('SentenceToken', function() {
  var SentenceToken;

  beforeEach(function(done) {
    require(['models/tokens/SentenceToken'], function(st) {
      SentenceToken = st;
      done();
    });
  });

  it('returns a function', function() {
    expect(typeof SentenceToken).toBe('function');
  });
});
