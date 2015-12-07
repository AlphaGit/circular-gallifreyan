define(['models/BaselinePositions', 'models/Shapes', 'models/Decorations'],
  function(BaselinePositions, Shapes, Decorations) {
    var PUNCTUATION_SYMBOLS = ['.', '?', '!', '"', '\'', '-', ','];
    function isPunctuation(letter) {
      return PUNCTUATION_SYMBOLS.indexOf(letter) > -1;
    }

    var LetterDescriptor = function LetterDescriptor(letter) {
      if (!letter) throw 'Missing letter!';
      this.letter = letter.toLowerCase();

      if (!BaselinePositions.isPresent(this.letter)) throw 'Cannot find baseline position definition for letter: "' + this.letter + '"';
      if (!Shapes.isPresent(this.letter)) throw 'Cannot find shape definition for letter: "' + this.letter + '"';
      if (!Decorations.isPresent(this.letter)) throw 'Cannot find decoration definition for letter: "' + this.letter + '"';

      this.baselinePosition = BaselinePositions.getBaselinePosition(this.letter);
      this.shape = Shapes.getShape(this.letter);
      this.decorationType = Decorations.getDecorationType(this.letter);
      this.decorationCount = Decorations.getDecorationCount(this.letter);
      this.isPunctuation = isPunctuation(this.letter);
    };

    LetterDescriptor.SHAPES = Shapes.SHAPES;
    LetterDescriptor.BASELINE_POSITIONS = BaselinePositions.BASELINE_POSITIONS;
    LetterDescriptor.DECORATION_TYPES = Decorations.DECORATION_TYPES;

    return LetterDescriptor;
  }
);
