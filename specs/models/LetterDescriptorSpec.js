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

  it('stores the letter passed to it', function() {
    var newObject = new LetterDescriptor('a');
    expect(newObject.letter).toBe('a');
  });

  it('stores the lowercase representation of the letter passed to it', function() {
    var newObject = new LetterDescriptor('A');
    expect(newObject.letter).toBe('a');
  });

  it('identifies the baseline position of the letter', function() {
    var newObject = new LetterDescriptor('a');
    expect(newObject.baselinePosition).toBe(LetterDescriptor.BASELINE_POSITIONS.BELOW_BASELINE);
  });

  it('identifies the shape of the letter', function() {
    var newObject = new LetterDescriptor('a');
    expect(newObject.shape).toBe(LetterDescriptor.SHAPES.SMALL_CIRCLE);
  });

  it('identifies the decoration type of the letter', function() {
    var newObject = new LetterDescriptor('a');
    expect(newObject.decorationType).toBe(LetterDescriptor.DECORATION_TYPES.NONE);
  });

  it('identifies the number of decorations of the letter', function() {
    var newObject = new LetterDescriptor('a');
    expect(newObject.decorationCount).toBe(0);
  });

  describe('letter baseline positions', function() {
    var letterExpectations = [
      { letter: 'a', baseLinePositionIdentifier: 'BELOW_BASELINE' },
      { letter: 'b', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'ch', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'd', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'e', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'f', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'g', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'h', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'i', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'j', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: 'k', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: 'l', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: 'm', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: 'n', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: 'o', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: 'p', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: 'qu', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'r', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'sh', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 's', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 't', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'u', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'v', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'w', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'x', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'y', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'z', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'ng', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: 'th', baseLinePositionIdentifier: 'ON_BASELINE' }
    ];

    for (var index in letterExpectations) {
      var le = letterExpectations[index];
      it('identifies ' + le.letter  +'\'s baseline position as ' + le.baseLinePositionIdentifier, function() {
        var letter = new LetterDescriptor(le.letter);
        expect(letter.baselinePosition).toBe(LetterDescriptor.BASELINE_POSITIONS[le.baseLinePositionIdentifier]);
      });
    }
  });
});
