define(function() {
  return function(text) {
    return new InternalTokenizer(text)
      .transformToLowercase()
      .removeUnsupportedPunctuation()
      .replaceSoftCs()
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
      result = result.replace(/[^\w\d\.\?!"'\-,]/g, '');
      return this;
    }

    this.replaceSoftCs = function replaceSoftCs() {
      result = result.replace(/c([ei])/g, 's$1');
      return this;
    };

    this.separateInLetters = function separateInLetters() {
      var LETTER_SEPARATOR = /(ch|sh|th|ng|qu|.)/g;

      var letters = [];
      while ((match = LETTER_SEPARATOR.exec(result)) !== null)
        letters.push(match[0]);
      result = letters;

      return this;
    }

    this.getResult = function getResult() {
      return result;
    }
  }
});
