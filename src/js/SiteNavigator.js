/* global Article: false */
/* global Page: false */

/* exported SiteNavigator */

var SiteNavigator = function(win, mainContainer) {
  this.win = win;
  this.mainContainer = mainContainer;

  // TODO(dustin): Put this in a better place.
  this.navPages = [];

  this.navPages[0] = new Page('MENU', 'icon_menu', '/', function (mainContainer) {
    mainContainer.innerHTML = '';
  });

  this.navPages[1] = new Page('HOME', 'icon_home', '/', function (mainContainer) {
    mainContainer.innerHTML = '';
  });

  this.navPages[2] = new Page('ABOUT', 'icon_account', '?page=about', function (mainContainer) {
    mainContainer.innerHTML = '';
  });

  // TODO(dustin): Wrap Article load logic into a helper.
  this.navPages[3] = new Page('BLOG', 'icon_pen', '?page=blog', function (mainContainer) {
    // TODO(dustin): Replace this poor performant refresh with document fragments.
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

  this.navPages[4] = new Page('PROJECTS', 'icon_code-tags', '?page=projects', function (mainContainer) {
    // TODO(dustin): Replace this poor performant refresh with document fragments.
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
};

SiteNavigator.prototype.navigateTo = function(page) {
  this.win.history.pushState(null, 'Dustin Lam - ' + page.label, page.path);
  page.loadHandler(this.mainContainer);
};

// TODO(dustin): Implement these and hook them up to window.on_ callbacks.
// SiteNavigator.prototype.goBack = function() {};
// SiteNavigator.prototype.goForward = function() {};

SiteNavigator.prototype.onLoad = function() {};

