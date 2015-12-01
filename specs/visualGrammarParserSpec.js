describe('VisualGrammarParser', function() {
  var visualGrammarParser;
  var tokensInputExample;

  beforeEach(function(done) {
    require(['visualGrammarParser'], function(vgp) {
      visualGrammarParser = vgp;

      tokensInputExample = [
        ['b', 'o', 'w', 't', 'i', 'e', 's'],
        ['a', 'r', 'e'],
        ['c', 'o', 'o', 'l', '!'],
        ['i', 't', '\'', 's'],
        ['b', 'i', 'g', 'g', 'e', 'r', ','],
        ['o', 'n'],
        ['t', 'h', 'e'],
        ['i', 'n', 's', 'i', 'd', 'e']
      ];
      done();
    });
  });

  it('returns a function', function() {
    expect(typeof visualGrammarParser).toBe('function');
  });

  it('returns a sentence at the top level', function() {
    //tests for an array
    expect(visualGrammarParser(tokensInputExample).length).toBeDefined();
  });
});
