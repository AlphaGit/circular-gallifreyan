define(function() {
  var LetterDescriptor = function LetterDescriptor(letter) {
    this.letter = (letter || '').toLowerCase();
    this.baselinePosition = getBaselinePosition(this.letter);
    this.shape = getLetterShape(this.letter);
    this.decorationType = getLetterDecorationType(this.letter);
    this.decorationCount = getLetterDecorationCount(this.letter);
  };

  LetterDescriptor.BASELINE_POSITIONS = {
    ABOVE_BASELINE: 'ABOVE_BASELINE',
    BELOW_BASELINE: 'BELOW_BASELINE',
    ON_BASELINE: 'ON_BASELINE'
  };

  var _letterBaselinePositions = {
    a: LetterDescriptor.BASELINE_POSITIONS.BELOW_BASELINE,
    b: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    ch: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    d: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    e: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    f: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    g: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    h: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    i: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    j: LetterDescriptor.BASELINE_POSITIONS.ABOVE_BASELINE,
    k: LetterDescriptor.BASELINE_POSITIONS.ABOVE_BASELINE,
    l: LetterDescriptor.BASELINE_POSITIONS.ABOVE_BASELINE,
    m: LetterDescriptor.BASELINE_POSITIONS.ABOVE_BASELINE,
    n: LetterDescriptor.BASELINE_POSITIONS.ABOVE_BASELINE,
    o: LetterDescriptor.BASELINE_POSITIONS.ABOVE_BASELINE,
    p: LetterDescriptor.BASELINE_POSITIONS.ABOVE_BASELINE,
    qu: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    r: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    sh: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    s: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    t: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    u: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    w: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    x: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    y: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    z: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    ng: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE,
    th: LetterDescriptor.BASELINE_POSITIONS.ON_BASELINE
  };

  LetterDescriptor.SHAPES = {
    SMALL_CIRCLE: 'SMALL_CIRCLE'
  };

  LetterDescriptor.DECORATION_TYPES = {
    NONE: 'NONE'
  };

  function getBaselinePosition(letter) {
    return _letterBaselinePositions[letter];
  };

  function getLetterShape(letter) {
    return LetterDescriptor.SHAPES.SMALL_CIRCLE;
  };

  function getLetterDecorationType(letter) {
    return LetterDescriptor.DECORATION_TYPES.NONE;
  }

  function getLetterDecorationCount(letter) {
    return 0;
  }

  return LetterDescriptor;
});
