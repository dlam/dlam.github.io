/*!
 * Grunt task to generate content JSON data for article cards.
 */

var fs = require('fs');

module.exports = function generateContentData(grunt) {
  var jsonData = [];
  var articles = fs.readdirSync('./res/docs/blog');

  var mdMatcher = /(.*)\.md/;
  for (var i = 0; i < articles.length; i++) {
    var match = articles[i].match(mdMatcher);

    if (match !== null) {
      var article = {
        "title": match[1]
      };

      jsonData.push(article);
    }
  }

  fs.writeFileSync('./res/docs/blog/content.json', JSON.stringify(jsonData));
}

