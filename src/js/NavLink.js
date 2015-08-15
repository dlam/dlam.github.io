function NavLink(element, iconPath, iconHoverPath) {
  this.element = element;
  this.iconPath = iconPath;
  this.iconHoverPath = iconHoverPath;

  this.render = function() {
    var img = this.element.querySelector('img');
    element.onmouseenter = function() {
      img.src = iconHoverPath;
    };

    element.onmouseleave = function() {
      img.src = iconPath;
    };
  };
}
