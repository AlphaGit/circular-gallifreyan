define(['tokenizer'], function(tokenizer) {
  var $text = $('#userText');
  $('#doTranslate').click(redraw);
  var $translatedBox = $('#translated');
  var paper = Raphael('translated', $translatedBox.width(), $translatedBox.height());

  function redraw() {
    paper.clear();

    var textToDraw = $text.val();
    var drawSpecification = getDrawingSpecification(textToDraw);

    var circle = paper.circle(pos.x, pos.y, 10);
    circle.attr('fill', '#fff');
    circle.attr('stroke', '#000');
  }

  function drawSpecification(text) {
    var tokens = tokenizer(text);
  }

  function tokenizeText(text) {

  }
});