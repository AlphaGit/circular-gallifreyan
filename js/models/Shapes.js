define(function() {
  var SHAPES = {
    SMALL_CIRCLE: 'SMALL_CIRCLE',
    CIRCLE: 'CONCAVE_ARC',
    CONCAVE_ARC: 'CONCAVE_ARC',
    FILLED_SMALL_CIRCLE: 'FILLED_SMALL_CIRCLE',
    NONE: 'NONE'
  };

  var _letterShapes = {
    a: SHAPES.SMALL_CIRCLE,
    b: SHAPES.CONCAVE_ARC,
    ch: SHAPES.CONCAVE_ARC,
    d: SHAPES.CONCAVE_ARC,
    e: SHAPES.SMALL_CIRCLE,
    f: SHAPES.CONCAVE_ARC,
    g: SHAPES.CONCAVE_ARC,
    h: SHAPES.CONCAVE_ARC,
    i: SHAPES.SMALL_CIRCLE,
    j: SHAPES.CIRCLE,
    k: SHAPES.CIRCLE,
    l: SHAPES.CIRCLE,
    m: SHAPES.CIRCLE,
    n: SHAPES.CIRCLE,
    o: SHAPES.SMALL_CIRCLE,
    p: SHAPES.CIRCLE,
    qu: SHAPES.CIRCLE,
    r: SHAPES.CONCAVE_ARC,
    sh: SHAPES.CONCAVE_ARC,
    s: SHAPES.CONCAVE_ARC,
    t: SHAPES.CONCAVE_ARC,
    u: SHAPES.SMALL_CIRCLE,
    v: SHAPES.CONCAVE_ARC,
    w: SHAPES.CONCAVE_ARC,
    x: SHAPES.CIRCLE,
    y: SHAPES.CIRCLE,
    z: SHAPES.CIRCLE,
    ng: SHAPES.CIRCLE,
    th: SHAPES.CIRCLE,
    '.': SHAPES.SMALL_CIRCLE,
    '?': SHAPES.NONE,
    '!': SHAPES.NONE,
    '"': SHAPES.NONE,
    '\'': SHAPES.NONE,
    '-': SHAPES.NONE,
    ',': SHAPES.FILLED_SMALL_CIRCLE,
    '0': SHAPES.NONE,
    '1': SHAPES.NONE,
    '2': SHAPES.CIRCLE,
    '3': SHAPES.CIRCLE,
    '4': SHAPES.CIRCLE,
    '5': SHAPES.CIRCLE,
    '6': SHAPES.CIRCLE,
    '7': SHAPES.CIRCLE,
    '8': SHAPES.CIRCLE,
    '9': SHAPES.CIRCLE
  };

  function getShape(letter) {
    return _letterShapes[letter];
  };

  function isPresent(letter) {
    return _letterShapes.hasOwnProperty(letter);
  }

  return {
    SHAPES: SHAPES,
    getShape: getShape,
    isPresent: isPresent
  };
});
