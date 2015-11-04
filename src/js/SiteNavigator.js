/* exported SiteNavigator */

var SiteNavigator = function(win) {
  this.win = win;
};

SiteNavigator.prototype.navigateTo = function(page) {
  this.win.history.pushState(null, 'Dustin Lam - ' + page.label, page.path);
  page.loadHandler();
};

// SiteNavigator.prototype.goBack = function() {};
// SiteNavigator.prototype.goForward = function() {};

