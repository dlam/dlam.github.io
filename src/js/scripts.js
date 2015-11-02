/* global Article */
/* global NavBar */
/* global Page */
/* global SiteNavigator */

/* exported siteNavigator */

// TODO(dustin): Investigate the best way to do globals.
var siteNavigator = new SiteNavigator(window);

window.onload = function() {
  var navContainer = document.querySelector('.navBar');
  var mainContainer = document.querySelector('.mainContainer');

  // Logic to render NavBar.
  var navPages = [];
  navPages[0] = new Page('MENU', 'icon_menu', '?page=menu', function () {
    mainContainer.innerHTML = '';
  });

  navPages[1] = new Page('HOME', 'icon_home', '/', function () {
    mainContainer.innerHTML = '';
  });

  navPages[2] = new Page('ABOUT', 'icon_account', '?page=about', function () {
    mainContainer.innerHTML = '';
  });

  navPages[3] = new Page('BLOG', 'icon_pen', '?page=blog', function () {
    mainContainer.innerHTML = '';

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
  });

  navPages[4] = new Page('PROJECTS', 'icon_code-tags', '?page=projects', function () {
    mainContainer.innerHTML = '';

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
  });
  new NavBar(navContainer, navPages).render();
};

