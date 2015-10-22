define(function() {
  var SHAPES = {
    SMALL_CIRCLE: 'SMALL_CIRCLE',
    CIRCLE: 'CONCAVE_ARC',
    CONCAVE_ARC: 'CONCAVE_ARC'
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
    th: SHAPES.CIRCLE
  };

  function getShape(letter) {
    return _letterShapes[letter];
  };

  return {
    SHAPES: SHAPES,
    getShape: getShape
  };
});
