/* exported NavBar */

/* global NavLink: false */

var NavBar = function(parentElement, pages) {
  this.parentElement = parentElement;
  this.pages = pages;
};

NavBar.prototype.render = function() {
  var element = document.createElement('ul');
  for (var i = 0; i < this.pages.length; i++) {
    new NavLink(element, this.pages[i]).render();
  }

  this.parentElement.appendChild(element);
};

