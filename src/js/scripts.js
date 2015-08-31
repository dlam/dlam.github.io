/* global Article */
/* global NavLink */
/* global SiteNavigator */

// TODO(dustin): Investigate the best way to do globals.
var siteNavigator = new SiteNavigator(window);

window.onload = function() {
  // TODO(dustin): Put this into NavBar.render().
  var navContainer = document.querySelector('.navBar ul');
  new NavLink(navContainer, 'MENU', 'icon_menu', 'menu').render();
  new NavLink(navContainer, 'HOME', 'icon_home', '/').render();
  new NavLink(navContainer, 'ABOUT', 'icon_account', 'about').render();
  new NavLink(navContainer, 'BLOG', 'icon_pen', 'blog').render();
  new NavLink(navContainer, 'PROJECTS', 'icon_code-tags', 'projects').render();

  var mainContainer = document.querySelector('.mainContainer');

  // Business logic for loading Articles.
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
