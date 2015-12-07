describe('VisualGrammarParser', function() {
  var visualGrammarParser;
  var tokensInputExample;

  beforeEach(function(done) {
    require(['visualGrammarParser'], function(vgp) {
      visualGrammarParser = vgp;

      tokensInputExample = [
        'b', 'o', 'w', 't', 'i', 'e', 's',
        'a', 'r', 'e',
        'k', 'o', 'o', 'l', '!',
        'i', 't', '\'', 's',
        'b', 'i', 'g', 'g', 'e', 'r', ',',
        'o', 'n',
        't', 'h', 'e',
        'i', 'n', 's', 'i', 'd', 'e'
      ];
      done();
    });
  });

  it('returns a function', function() {
    expect(typeof visualGrammarParser).toBe('function');
  });

  it('returns sentences at the top level', function() {
    expect(visualGrammarParser(tokensInputExample).length).toBe(4);
  });
});
