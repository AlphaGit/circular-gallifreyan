define('tokenizer', function() {
  return function(text) {
    return text
      .split(' ')
      .map(function(word) { return word.split(''); });
  }
});
