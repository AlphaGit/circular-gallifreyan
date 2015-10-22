describe('LetterDescriptor', function() {
  var LetterDescriptor;

  beforeEach(function(done) {
    require(['models/LetterDescriptor'], function(ld) {
      LetterDescriptor = ld;
      done();
    });
  });

  it('returns a function', function() {
    expect(typeof LetterDescriptor === 'function').toBe(true);
  });

  it('can be instantiated as a class', function() {
    var newObject = new LetterDescriptor();
    expect(newObject).toBeDefined();
  });

  it('will store the letter passed to it', function() {
    var newObject = new LetterDescriptor('a');
    expect(newObject.letter).toBe('a');
  });

  it('will store the lowercase representation of the letter passed to it', function() {
    var newObject = new LetterDescriptor('A');
    expect(newObject.letter).toBe('a');
  });
});
