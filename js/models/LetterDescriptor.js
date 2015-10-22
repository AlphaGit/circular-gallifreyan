define(['models/BaselinePositions', 'models/LetterShapes'],
  function(BP, LS) {

    var LetterDescriptor = function LetterDescriptor(letter) {
      this.letter = (letter || '').toLowerCase();

      this.baselinePosition = BP.getBaselinePosition(this.letter);
      this.shape = LS.getShape(this.letter);
      this.decorationType = getLetterDecorationType(this.letter);
      this.decorationCount = getLetterDecorationCount(this.letter);
    };

    LetterDescriptor.SHAPES = LS.SHAPES;
    LetterDescriptor.BASELINE_POSITIONS = BP.BASELINE_POSITIONS;

    LetterDescriptor.DECORATION_TYPES = {
      NONE: 'NONE'
    };

    function getLetterDecorationType(letter) {
      return LetterDescriptor.DECORATION_TYPES.NONE;
    }

    function getLetterDecorationCount(letter) {
      return 0;
    }

    return LetterDescriptor;
  }
);
