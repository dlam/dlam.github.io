
window.onload = function() {
  var navBar = document.querySelector('.navBar ul');
  for (var i = 0; i < MENU_LINKS.length; i++) {
    var navLink = new NavLink(navBar, i);
    navLink.render();
  }

  var mainContainer = document.querySelector('.mainContainer');

  var xmlHttp = new XMLHttpRequest();
  var url = 'res/docs/blog/content.json';

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      var content = JSON.parse(xmlHttp.responseText);
      for (var i = 0; i < content.length; i++) {
        var article = new Article(mainContainer, content[i]);
        article.render();
      }
    }
  };

  xmlHttp.open("GET", url, true);
  xmlHttp.send();
};
