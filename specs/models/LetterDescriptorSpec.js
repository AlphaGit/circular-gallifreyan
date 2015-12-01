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
    var newObject = new LetterDescriptor('a');
    expect(newObject).toBeDefined();
  });

  it('throws an error if a letter is not passed', function() {
    function noParameterPassed() {
      new LetterDescriptor();
    }
    expect(noParameterPassed).toThrow();
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

  describe('baseline positions', function() {
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
      { letter: 'th', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: '.', baseLinePositionIdentifier: 'SENTENCE_CIRCLE' },
      { letter: '?', baseLinePositionIdentifier: 'SENTENCE_CIRCLE' },
      { letter: '!', baseLinePositionIdentifier: 'SENTENCE_CIRCLE' },
      { letter: '"', baseLinePositionIdentifier: 'SENTENCE_CIRCLE' },
      { letter: '\'', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: '-', baseLinePositionIdentifier: 'SENTENCE_CIRCLE' },
      { letter: ',', baseLinePositionIdentifier: 'SENTENCE_CIRCLE' },
      { letter: '0', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: '1', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: '2', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: '3', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: '4', baseLinePositionIdentifier: 'ON_BASELINE' },
      { letter: '5', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: '6', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: '7', baseLinePositionIdentifier: 'ABOVE_BASELINE' },
      { letter: '8', baseLinePositionIdentifier: 'BELOW_BASELINE' },
      { letter: '9', baseLinePositionIdentifier: 'BELOW_BASELINE' }
    ];

    for (var index in letterExpectations) {
      var le = letterExpectations[index];
      (function(letterName, baseLinePositionIdentifier) {
        it('identifies ' + letterName  +'\'s baseline position as ' + baseLinePositionIdentifier, function() {
          var letter = new LetterDescriptor(letterName);
          expect(letter.baselinePosition).toBe(LetterDescriptor.BASELINE_POSITIONS[baseLinePositionIdentifier]);
        });
      })(le.letter, le.baseLinePositionIdentifier);
    }
  }); // letter baseline positions

  describe('shapes', function() {
    var letterExpectations = [
      { letter: 'a', shapeIdentifier: 'SMALL_CIRCLE' },
      { letter: 'b', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'ch', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'd', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'e', shapeIdentifier: 'SMALL_CIRCLE' },
      { letter: 'f', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'g', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'h', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'i', shapeIdentifier: 'SMALL_CIRCLE' },
      { letter: 'j', shapeIdentifier: 'CIRCLE' },
      { letter: 'k', shapeIdentifier: 'CIRCLE' },
      { letter: 'l', shapeIdentifier: 'CIRCLE' },
      { letter: 'm', shapeIdentifier: 'CIRCLE' },
      { letter: 'n', shapeIdentifier: 'CIRCLE' },
      { letter: 'o', shapeIdentifier: 'SMALL_CIRCLE' },
      { letter: 'p', shapeIdentifier: 'CIRCLE' },
      { letter: 'qu', shapeIdentifier: 'CIRCLE' },
      { letter: 'r', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'sh', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 's', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 't', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'u', shapeIdentifier: 'SMALL_CIRCLE' },
      { letter: 'v', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'w', shapeIdentifier: 'CONCAVE_ARC' },
      { letter: 'x', shapeIdentifier: 'CIRCLE' },
      { letter: 'y', shapeIdentifier: 'CIRCLE' },
      { letter: 'z', shapeIdentifier: 'CIRCLE' },
      { letter: 'ng', shapeIdentifier: 'CIRCLE' },
      { letter: 'th', shapeIdentifier: 'CIRCLE' },
      { letter: '.', shapeIdentifier: 'SMALL_CIRCLE' },
      { letter: '?', shapeIdentifier: 'NONE' },
      { letter: '!', shapeIdentifier: 'NONE' },
      { letter: '"', shapeIdentifier: 'NONE' },
      { letter: '\'', shapeIdentifier: 'NONE' },
      { letter: '-', shapeIdentifier: 'NONE' },
      { letter: ',', shapeIdentifier: 'FILLED_SMALL_CIRCLE' },
      { letter: '0', shapeIdentifier: 'NONE' },
      { letter: '1', shapeIdentifier: 'NONE' },
      { letter: '2', shapeIdentifier: 'CIRCLE' },
      { letter: '3', shapeIdentifier: 'CIRCLE' },
      { letter: '4', shapeIdentifier: 'CIRCLE' },
      { letter: '5', shapeIdentifier: 'CIRCLE' },
      { letter: '6', shapeIdentifier: 'CIRCLE' },
      { letter: '7', shapeIdentifier: 'CIRCLE' },
      { letter: '8', shapeIdentifier: 'CIRCLE' },
      { letter: '9', shapeIdentifier: 'CIRCLE' }
    ];

    for (var index in letterExpectations) {
      var le = letterExpectations[index];

      (function(letterName, shapeIdentifier) {
        it('identifies ' + letterName  +'\'s shape as ' + shapeIdentifier, function() {
          var letter = new LetterDescriptor(letterName);
          expect(letter.shape).toBe(LetterDescriptor.SHAPES[shapeIdentifier]);
        });
      })(le.letter, le.shapeIdentifier);
    }
  }); // letter shapes

  describe('decoration types', function() {
    var letterExpectations = [
      { letter: 'a', decorationTypeIdentifier: 'NONE' },
      { letter: 'b', decorationTypeIdentifier: 'NONE' },
      { letter: 'ch', decorationTypeIdentifier: 'DOTS' },
      { letter: 'd', decorationTypeIdentifier: 'DOTS' },
      { letter: 'e', decorationTypeIdentifier: 'NONE' },
      { letter: 'f', decorationTypeIdentifier: 'LINES' },
      { letter: 'g', decorationTypeIdentifier: 'LINES' },
      { letter: 'h', decorationTypeIdentifier: 'LINES' },
      { letter: 'i', decorationTypeIdentifier: 'LINES' },
      { letter: 'j', decorationTypeIdentifier: 'NONE' },
      { letter: 'k', decorationTypeIdentifier: 'DOTS' },
      { letter: 'l', decorationTypeIdentifier: 'DOTS' },
      { letter: 'm', decorationTypeIdentifier: 'LINES' },
      { letter: 'n', decorationTypeIdentifier: 'LINES' },
      { letter: 'o', decorationTypeIdentifier: 'NONE' },
      { letter: 'p', decorationTypeIdentifier: 'LINES' },
      { letter: 'qu', decorationTypeIdentifier: 'LINES' },
      { letter: 'r', decorationTypeIdentifier: 'DOTS' },
      { letter: 'sh', decorationTypeIdentifier: 'DOTS' },
      { letter: 's', decorationTypeIdentifier: 'LINES' },
      { letter: 't', decorationTypeIdentifier: 'NONE' },
      { letter: 'u', decorationTypeIdentifier: 'LINES' },
      { letter: 'v', decorationTypeIdentifier: 'LINES' },
      { letter: 'w', decorationTypeIdentifier: 'LINES' },
      { letter: 'x', decorationTypeIdentifier: 'LINES' },
      { letter: 'y', decorationTypeIdentifier: 'DOTS' },
      { letter: 'z', decorationTypeIdentifier: 'DOTS' },
      { letter: 'ng', decorationTypeIdentifier: 'LINES' },
      { letter: 'th', decorationTypeIdentifier: 'NONE' },
      { letter: '.', decorationTypeIdentifier: 'NONE' },
      { letter: '?', decorationTypeIdentifier: 'DOTS' },
      { letter: '!', decorationTypeIdentifier: 'DOTS' },
      { letter: '"', decorationTypeIdentifier: 'LINES' },
      { letter: '\'', decorationTypeIdentifier: 'LINES' },
      { letter: '-', decorationTypeIdentifier: 'LINES' },
      { letter: ',', decorationTypeIdentifier: 'NONE' },
      { letter: '0', decorationTypeIdentifier: 'LINES' },
      { letter: '1', decorationTypeIdentifier: 'LINES' },
      { letter: '2', decorationTypeIdentifier: 'NONE' },
      { letter: '3', decorationTypeIdentifier: 'INNER_CIRCLES' },
      { letter: '4', decorationTypeIdentifier: 'INNER_CIRCLES' },
      { letter: '5', decorationTypeIdentifier: 'NONE' },
      { letter: '6', decorationTypeIdentifier: 'INNER_CIRCLES' },
      { letter: '7', decorationTypeIdentifier: 'INNER_CIRCLES' },
      { letter: '8', decorationTypeIdentifier: 'NONE' },
      { letter: '9', decorationTypeIdentifier: 'INNER_CIRCLES' }
    ];

    for (var index in letterExpectations) {
      var le = letterExpectations[index];

      (function(letterName, decorationTypeIdentifier) {
        it('identifies ' + letterName  +'\'s decoration type as ' + decorationTypeIdentifier, function() {
          var letter = new LetterDescriptor(letterName);
          expect(letter.decorationType).toBe(LetterDescriptor.DECORATION_TYPES[decorationTypeIdentifier]);
        });
      })(le.letter, le.decorationTypeIdentifier);
    }
  }); // letter decoration types

  describe('decoration count', function() {
    var letterExpectations = [
      { letter: 'a', count: 0 },
      { letter: 'b', count: 0 },
      { letter: 'ch', count: 2 },
      { letter: 'd', count: 2 },
      { letter: 'e', count: 0 },
      { letter: 'f', count: 3 },
      { letter: 'g', count: 1 },
      { letter: 'h', count: 2 },
      { letter: 'i', count: 1 },
      { letter: 'j', count: 0 },
      { letter: 'k', count: 2 },
      { letter: 'l', count: 3 },
      { letter: 'm', count: 3 },
      { letter: 'n', count: 1 },
      { letter: 'o', count: 0 },
      { letter: 'p', count: 2 },
      { letter: 'qu', count: 1 },
      { letter: 'r', count: 3 },
      { letter: 'sh', count: 2 },
      { letter: 's', count: 3 },
      { letter: 't', count: 0 },
      { letter: 'u', count: 1 },
      { letter: 'v', count: 1 },
      { letter: 'w', count: 2 },
      { letter: 'x', count: 2 },
      { letter: 'y', count: 2 },
      { letter: 'z', count: 3 },
      { letter: 'ng', count: 3 },
      { letter: 'th', count: 0 },
      { letter: '.', count: 0 },
      { letter: '?', count: 2 },
      { letter: '!', count: 3 },
      { letter: '"', count: 1 },
      { letter: '\'', count: 2 },
      { letter: '-', count: 3 },
      { letter: ',', count: 0 },
      { letter: '0', count: 1 },
      { letter: '1', count: 1 },
      { letter: '2', count: 0 },
      { letter: '3', count: 1 },
      { letter: '4', count: 2 },
      { letter: '5', count: 0 },
      { letter: '6', count: 1 },
      { letter: '7', count: 2 },
      { letter: '8', count: 0 },
      { letter: '9', count: 1 }
    ];

    for (var index in letterExpectations) {
      var le = letterExpectations[index];

      (function(letterName, decorationCount) {
        it('identifies ' + letterName  + ' having ' + decorationCount + ' decorations', function() {
          var letter = new LetterDescriptor(letterName);
          expect(letter.decorationCount).toBe(decorationCount);
        });
      })(le.letter, le.count);
    }
  }); // letter decoration count
});
