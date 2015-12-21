/* exported NavLink */

var NavLink = function(siteNavigator, parentElement, page) {
  this.siteNavigator = siteNavigator;
  this.parentElement = parentElement;
  this.page = page;
};

NavLink.prototype.render = function() {
  var element = document.createElement('li');
  element.className = 'navButton';

  var iconElement = document.createElement('i');
  iconElement.className = 'icon ' + this.page.icon;

  var labelElement = document.createElement('span');
  labelElement.className = 'label';
  labelElement.textContent = this.page.label;

  element.appendChild(iconElement);
  element.appendChild(labelElement);
  this.parentElement.appendChild(element);

  var _this = this;
  element.onmousedown = function() {
    _this.siteNavigator.navigateTo(_this.page);
  };
};

