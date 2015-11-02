describe('Tokenizer', function() {
  var tokenizer;

  beforeEach(function(done) {
    require(['tokenizer'], function(tk) {
      tokenizer = tk;
      done();
    });
  });

  it('returns a function', function() {
    expect(typeof tokenizer).toBe('function');
  });

  it('returns an array of words and letters in them', function() {
    var result = tokenizer('heres a few words');

    expect(result).toEqual([
      ['h', 'e', 'r', 'e', 's'],
      ['a'],
      ['f', 'e', 'w'],
      ['w', 'o', 'r', 'd', 's']
    ]);
  });

  it('replaces /ce/ and /ci/ by /se/ and /si/ (soft c sound)', function() {
    var result = tokenizer('aceciu');
    expect(result).toEqual([ ['a', 's', 'e', 's', 'i', 'u'] ]);
  });

  it('returns all results in lowercase', function() {
    expect(tokenizer('AEi')).toEqual([ ['a', 'e', 'i' ] ]);
  });

  it('treats ch as a single letter', function() {
    expect(tokenizer('chiropractic')).toEqual([ ['ch', 'i', 'r', 'o', 'p', 'r', 'a', 'c', 't', 'i', 'c'] ]);
  });

  it('treats sh as a single letter', function() {
    expect(tokenizer('shush smol sister')).toEqual([
      ['sh', 'u', 'sh'],
      ['s', 'm', 'o', 'l'],
      ['s', 'i', 's', 't', 'e', 'r']
    ]);
  });

  it('treats th as a single letter', function() {
    expect(tokenizer('thanks totem')).toEqual([
      ['th', 'a', 'n', 'k', 's'],
      ['t', 'o', 't', 'e', 'm']
    ]);
  });

  it('treats ng as a single letter', function() {
    expect(tokenizer('ngsomethingn')).toEqual([ ['ng', 's', 'o', 'm', 'e', 'th', 'i', 'ng', 'n'] ]);
  });

  it('treats qu as a single letter', function() {
    expect(tokenizer('quien es el doctor')).toEqual([
      ['qu', 'i', 'e', 'n'],
      ['e', 's'],
      ['e', 'l'],
      ['d', 'o', 'c', 't', 'o', 'r']
    ]);
  });

  describe('punctuation', function() {
    it('allows .', function() {
      expect(tokenizer('a.b')).toEqual([ ['a', '.', 'b' ]]);
    });

    it('allows ?', function() {
      expect(tokenizer('a?b')).toEqual([ ['a', '?', 'b' ]]);
    });

    it('allows !', function() {
      expect(tokenizer('a!b')).toEqual([ ['a', '!', 'b' ]]);
    });

    it('allows "', function() {
      expect(tokenizer('a"b')).toEqual([ ['a', '"', 'b' ]]);
    });

    it('allows \'', function() {
      expect(tokenizer('a\'b')).toEqual([ ['a', '\'', 'b' ]]);
    });

    it('allows -', function() {
      expect(tokenizer('a-b')).toEqual([ ['a', '-', 'b' ]]);
    });

    it('allows ,', function() {
      expect(tokenizer('a,b')).toEqual([ ['a', ',', 'b' ]]);
    });

    it('allows digits', function() {
      expect(tokenizer('R2D2-1')).toEqual([ ['r', '2', 'd', '2', '-', '1'] ]);
    });

    it('removes any other punctuation', function() {
      expect(tokenizer('a$b')).toEqual([ ['a', 'b'] ]);
    });
  });
});
