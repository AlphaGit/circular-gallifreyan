define(['tokenizer', 'visualGrammarParser'], function(tokenizer, visualGrammarParser) {
  var DrawingSpecification = function DrawingSpecification() {
  };

  function getVisualRepresentation(tokens) {
    return visualGrammarParser(tokens);
  }

  DrawingSpecification.parse = function parse(textToParse) {
    // 'w1.w2.' => [w, 1, ., w, 2, .]
    var tokens = tokenizer(textToParse);

    var visualRepresentation = getVisualRepresentation(tokens);

    return tokens;
  };

  return DrawingSpecification;
});
