define(['models/LetterDescriptor'], function(LetterDescriptor) {
  return function(tokens) {
    var sentenceObjects = [];

    var currentWord = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (!new LetterDescriptor(token).isPunctuation) {
        currentWord.push(token);
      } else {
        if (currentWord.length > 0) {
          var wordRepresentation = wordParser(currentWord);
          sentenceObjects.push(wordRepresentation);
        }
        var punctuationRepresentation = new PunctuationRepresentation(token);
        sentenceObjects.push(punctuationRepresentation);
        currentWord = [];
      }
    }
    return sentenceObjects;
  };
});
