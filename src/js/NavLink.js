/* global siteNavigator */

var NavLink = function(parentElement, label, icon, path) {
  this.parentElement = parentElement;
  this.label = label;
  this.icon = icon;
  this.path = path;
};

NavLink.prototype.render = function() {
  var element = document.createElement('li');
  element.className = 'navButton';

  var iconElement = document.createElement('i');
  iconElement.className = 'icon ' + this.icon;

  var labelElement = document.createElement('span');
  labelElement.className = 'label';
  labelElement.textContent = this.label;

  element.appendChild(iconElement);
  element.appendChild(labelElement);
  this.parentElement.appendChild(element);

  var _this = this;
  element.onmousedown = function() {
    siteNavigator.navigateTo(_this.path);
  };
};

