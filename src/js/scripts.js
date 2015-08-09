window.onload = function() {
  var mainContainer = document.querySelector('.mainContainer');

  var xmlHttp = new XMLHttpRequest();
  var url = 'res/docs/blog/content.json';

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var content = JSON.parse(xmlHttp.responseText);
      for (var i = 0; i < content.length; i++) {
        var articleImg = 'res/img/sample.jpg';
        var articleTitle = content[i].title;
        var articleContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

        mainContainer.innerHTML +=
          '<div class="articleContainer">' +
          '<div class="article">' +
          '<img src="' +
          articleImg +
          '"></img>' +
          '<div class="articleTitle">' +
          articleTitle +
          '</div>' +
          '<div class="articleContent">' +
          articleContent +
          '</div>' +
          '</div>';
      }
    }
  }

  xmlHttp.open("GET", url, true);
  xmlHttp.send();
}
