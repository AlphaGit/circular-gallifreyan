describe("Tokenizer", function() {
  var tokenizer;

  beforeEach(function(done) {
    require(['tokenizer'], function(tk) {
      tokenizer = tk;
      done();
    });
  });

  it('should return a function', function() {
    expect(typeof tokenizer === 'function').toBe(true);
  });

  it('should return an array of words and letters in them', function() {
    var result = tokenizer('heres a few words');

    expect(result).toEqual([
      ['h', 'e', 'r', 'e', 's'],
      ['a'],
      ['f', 'e', 'w'],
      ['w', 'o', 'r', 'd', 's']
    ]);
  });
});
