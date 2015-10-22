define(['models/BaselinePositions', 'models/Shapes', 'models/Decorations'],
  function(BaselinePositions, Shapes, Decorations) {

    var LetterDescriptor = function LetterDescriptor(letter) {
      if (!letter) throw "Missing letter!";
      this.letter = letter.toLowerCase();

      this.baselinePosition = BaselinePositions.getBaselinePosition(this.letter);
      this.shape = Shapes.getShape(this.letter);
      this.decorationType = Decorations.getDecorationType(this.letter);
      this.decorationCount = Decorations.getDecorationCount(this.letter);
    };

    LetterDescriptor.SHAPES = Shapes.SHAPES;
    LetterDescriptor.BASELINE_POSITIONS = BaselinePositions.BASELINE_POSITIONS;
    LetterDescriptor.DECORATION_TYPES = Decorations.DECORATION_TYPES;

    return LetterDescriptor;
  }
);
