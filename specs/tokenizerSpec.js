describe("Tokenizer", function() {
  var tokenizer;

  beforeEach(function(done) {
    require(['tokenizer'], function(tk) {
      tokenizer = tk;
      done();
    });
  });

  it('should be defined', function() {
    expect(tokenizer).not.toBeNull();
  });

  it('should return the same text as passed', function() {
    var result = tokenizer('text');
    expect(result).toEqual('text');
  });
});
