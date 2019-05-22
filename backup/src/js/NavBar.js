/* exported NavBar */

/* global NavLink: false */

var NavBar = function(parentElement, siteNavigator) {
  this.parentElement = parentElement;
  this.siteNavigator = siteNavigator;
};

NavBar.prototype.render = function() {
  var element = document.createElement('ul');
  for (var i = 0; i < this.siteNavigator.navPages.length; i++) {
    new NavLink(this.siteNavigator, element, this.siteNavigator.navPages[i]).render();
  }

  this.parentElement.appendChild(element);
};

