/*!
 * Grunt task to generate content JSON data for article cards.
 */

var fs = require('fs');

module.exports = function generateContentData(grunt) {
  var jsonData = [];
  var articles = fs.readdirSync('./res/docs/blog');

  var mdMatcher = /(.*\.md)/;
  for (var i = 0; i < articles.length; i++) {
    var mdMatch = articles[i].match(mdMatcher);

    if (mdMatch !== null) {
      var data = fs.readFileSync('./res/docs/blog/' + mdMatch[1], { 'encoding':'utf8' });

      // TODO(dustin): Should also accept \n in value fields.
      // TODO(dustin): Should be able to read fields out of order.
      var metadataMatcher = /<!--[\s\S]*Title:[\s\n]*(.*)[\s\S]*Description:[\s\n]*(.*)[\s\S]*Image:[\s\n]*(.*)[\s\S]*-->/;
      var metadataMatch = data.match(metadataMatcher);
      if (metadataMatch !== null) {
        var article = {
          "title": metadataMatch[1],
          "content": metadataMatch[2],
          "image": metadataMatch[3],
          "date": mdMatch[1].split('.')[0]
        };

        jsonData.push(article);
      }
    }
  }

  grunt.log.writeln(JSON.stringify(jsonData));
  fs.writeFileSync('./res/docs/blog/content.json', JSON.stringify(jsonData));
}

