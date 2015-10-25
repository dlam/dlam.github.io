/* global Article */
/* global NavBar */
/* global NavLink */
/* global Page */
/* global SiteNavigator */

/* exported siteNavigator */

// TODO(dustin): Investigate the best way to do globals.
var siteNavigator = new SiteNavigator(window);

window.onload = function() {
  var bodyContainer = document.querySelector('.body');
  var navContainer = document.querySelector('.navBar');
  var mainContainer = document.querySelector('.mainContainer');

  var navPages = [];
  navPages[0] = new Page('MENU', 'icon_menu', '?page=menu');
  navPages[1] = new Page('HOME', 'icon_home', '/');
  navPages[2] = new Page('ABOUT', 'icon_account', '?page=about');
  navPages[3] = new Page('BLOG', 'icon_pen', '?page=blog');
  navPages[4] = new Page('PROJECTS', 'icon_code-tags', '?page=projects');
  new NavBar(navContainer, navPages).render();


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

