define(['tokenizer'], function(tokenizer) {
  var DrawingSpecification = function DrawingSpecification() {
  };

  DrawingSpecification.parse = function parse(textToParse) {
    // 'word1 word2. word3.' => [sentence1, sentence2]
    var tokens = tokenizer(textToParse);
    return tokens;
  };

  return DrawingSpecification;
});
