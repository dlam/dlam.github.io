var SiteNavigator = function(win) {
  this.win = win;
};

SiteNavigator.prototype.navigateTo = function(page) {
  this.win.history.pushState(null, 'Dustin Lam - ' + page, page);
};

// SiteNavigator.prototype.goBack = function() {};
// SiteNavigator.prototype.goForward = function() {};

