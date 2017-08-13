**Not currently under development**

PoC was achieved. Next steps may come out of free time but I'm currently embarked in other projects. Please let me know if you'd like me to continue working on this.

circular-gallifreyan
====================

Circular Gallifreyan writer

// TODO complete this

## Sources:

- http://www.shermansplanet.com/gallifreyan
- http://www.reddit.com/r/gallifreyan
- http://timeturners.wikidot.com/circular-gallifreyan

## Using:

- [HTML5 Boilerplate](http://html5boilerplate.com/)
- [Jasmine](http://jasmine.github.io/)
- [RequireJS](http://requirejs.org/)
- [Testem](https://github.com/testem/testem)
- [RaphaelJS](http://raphaeljs.com/)

## Some more explanations

The parser works by taking the text, filtering input and working on each
particular letter.

The input is transform then into an array of letter specifications, which then
gets parsed into a visual representation guideline of what needs to be drawn.

The visual representation can be represented with the following grammar:

    ROOT => sentenceCircle+
    sentenceCircle => (wordCircle / sentencePunctuation)+
    sentencePunctuation => letterGlyph
    wordCircle => letterGroupCircle+
    letterGroupCircle => letterGlyph+
