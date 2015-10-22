define(function() {
  return function(text) {
    return new InternalTokenizer(text)
      .transformToLowercase()
      .removeUnsupportedPunctuation()
      .replaceSoftCs()
      .separateInWords()
      .separateInLetters()
      .getResult();
  };

  function InternalTokenizer(initialText) {
    var result = initialText;

    this.transformToLowercase = function transformToLowercase() {
      result = result.toLowerCase();
      return this;
    }

    this.removeUnsupportedPunctuation = function removeUnsupportedPunctuation() {
      result = result.replace(/[^\w\d\.\?!"'\-,\s]/g, '');
      return this;
    }

    this.replaceSoftCs = function replaceSoftCs() {
      result = result.replace(/c([ei])/g, 's$1');
      return this;
    };

    this.separateInWords = function separateInWords() {
      result = result.split(' ');
      return this;
    }

    this.separateInLetters = function separateInLetters() {
      var LETTER_SEPARATOR = /(ch|sh|th|ng|qu|.)/g;
      result = result.map(function(word) {
        var letters = [];
        while ((match = LETTER_SEPARATOR.exec(word)) !== null)
          letters.push(match[0]);
        return letters;
      });
      return this;
    }

    this.getResult = function getResult() {
      return result;
    }
  }
});
