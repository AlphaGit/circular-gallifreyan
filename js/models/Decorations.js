define(function() {
  var DECORATION_TYPES = {
    NONE: 'NONE',
    DOTS: 'DOTS',
    LINES: 'LINES',
    INNER_CIRCLES: 'INNER_CIRCLES'
  };

  var _decorations = {
    a: { type: DECORATION_TYPES.NONE, count: 0 },
    b: { type: DECORATION_TYPES.NONE, count: 0 },
    ch: { type: DECORATION_TYPES.DOTS, count: 2 },
    d: { type: DECORATION_TYPES.DOTS, count: 2 },
    e: { type: DECORATION_TYPES.NONE, count: 0 },
    f: { type: DECORATION_TYPES.LINES, count: 3 },
    g: { type: DECORATION_TYPES.LINES, count: 1 },
    h: { type: DECORATION_TYPES.LINES, count: 2 },
    i: { type: DECORATION_TYPES.LINES, count: 1 },
    j: { type: DECORATION_TYPES.NONE, count: 0 },
    k: { type: DECORATION_TYPES.DOTS, count: 2 },
    l: { type: DECORATION_TYPES.DOTS, count: 3 },
    m: { type: DECORATION_TYPES.LINES, count: 3 },
    n: { type: DECORATION_TYPES.LINES, count: 1 },
    o: { type: DECORATION_TYPES.NONE, count: 0 },
    p: { type: DECORATION_TYPES.LINES, count: 2 },
    qu: { type: DECORATION_TYPES.LINES, count: 1 },
    r: { type: DECORATION_TYPES.DOTS, count: 3 },
    sh: { type: DECORATION_TYPES.DOTS, count: 2 },
    s: { type: DECORATION_TYPES.LINES, count: 3 },
    t: { type: DECORATION_TYPES.NONE, count: 0 },
    u: { type: DECORATION_TYPES.LINES, count: 1 },
    v: { type: DECORATION_TYPES.LINES, count: 1 },
    w: { type: DECORATION_TYPES.LINES, count: 2 },
    x: { type: DECORATION_TYPES.LINES, count: 2 },
    y: { type: DECORATION_TYPES.DOTS, count: 2 },
    z: { type: DECORATION_TYPES.DOTS, count: 3 },
    ng: { type: DECORATION_TYPES.LINES, count: 3 },
    th: { type: DECORATION_TYPES.NONE, count: 0 },
    '.': { type: DECORATION_TYPES.NONE, count: 0 },
    '?': { type: DECORATION_TYPES.DOTS, count: 2 },
    '!': { type: DECORATION_TYPES.DOTS, count: 3 },
    '"': { type: DECORATION_TYPES.LINES, count: 1 },
    '\'': { type: DECORATION_TYPES.LINES, count: 2 },
    '-': { type: DECORATION_TYPES.LINES, count: 3 },
    ',': { type: DECORATION_TYPES.NONE, count: 0 },
    '0': { type: DECORATION_TYPES.LINES, count: 1 },
    '1': { type: DECORATION_TYPES.LINES, count: 1 },
    '2': { type: DECORATION_TYPES.NONE, count: 0 },
    '3': { type: DECORATION_TYPES.INNER_CIRCLES, count: 1 },
    '4': { type: DECORATION_TYPES.INNER_CIRCLES, count: 2 },
    '5': { type: DECORATION_TYPES.NONE, count: 0 },
    '6': { type: DECORATION_TYPES.INNER_CIRCLES, count: 1 },
    '7': { type: DECORATION_TYPES.INNER_CIRCLES, count: 2 },
    '8': { type: DECORATION_TYPES.NONE, count: 0 },
    '9': { type: DECORATION_TYPES.INNER_CIRCLES, count: 1 }
  };

  function getDecorationType(letter) {
    return _decorations[letter].type;
  }

  function getDecorationCount(letter) {
    return _decorations[letter].count;
  }

  function isPresent(letter) {
    return _decorations.hasOwnProperty(letter);
  }

  return {
    DECORATION_TYPES: DECORATION_TYPES,
    getDecorationType: getDecorationType,
    getDecorationCount: getDecorationCount,
    isPresent: isPresent
  };
});
