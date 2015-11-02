describe('DrawingSpecification', function() {
  var DrawingSpecification;

  beforeEach(function(done) {
    require(['models/DrawingSpecification'], function(ds) {
      DrawingSpecification = ds;
      done();
    });
  });

  it('returns a function', function() {
    expect(typeof DrawingSpecification).toBe('function');
  });

  it('has a parse function', function() {
    expect(typeof DrawingSpecification.parse).toBe('function');
  });
});
