define(['models/DrawingSpecification'], function(DrawingSpecification) {
  var $text = $('#userText');
  var $debugInfo = $('#debugInfo');

  $('#doTranslate').click(redraw);
  var $translatedBox = $('#translated');
  var paper = Raphael('translated', $translatedBox.width(), $translatedBox.height());

  function redraw() {
    paper.clear();

    var textToDraw = $text.val();
    var drawSpecification = DrawingSpecification.parse(textToDraw);
    $debugInfo.text(JSON.stringify(drawSpecification));

    var circle = paper.circle(20, 20, 10);
    circle.attr('fill', '#fff');
    circle.attr('stroke', '#000');
  }
});
