define(function() {
  return function LetterDescriptor(letter) {
    this.letter = (letter || '').toLowerCase();
  };
});
