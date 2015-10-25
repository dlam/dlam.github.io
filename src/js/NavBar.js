/* global NavLink */

var NavBar = function(parentElement, pages) {
  this.parentElement = parentElement;
  this.pages = pages;
};

NavBar.prototype.render = function() {
  var element = document.createElement('ul');
  for (var i = 0; i < this.pages.length; i++) {
    var page = this.pages[i];
    new NavLink(element, page.label, page.icon, page.path).render();
  }

  this.parentElement.appendChild(element);
};

