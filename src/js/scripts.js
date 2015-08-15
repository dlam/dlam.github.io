// TODO(dustin): Generate this dynamically via Grunt.
MENU_LINKS = [
  'menu',
  'home',
  'about',
  'blog',
  'projects'
]

window.onload = function() {
  var navLinks = document.querySelectorAll('.navBar li');
  for (var i = 0; i < navLinks.length; i++) {
    var navLink = new NavLink(navLinks[i], './res/img/icon_' + MENU_LINKS[i] +'.svg', './res/img/icon_' + MENU_LINKS[i] + '_hover.svg');
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
}
