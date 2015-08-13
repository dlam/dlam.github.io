function NavLink(element, iconPath, iconHoverPath) {
  var img = element.querySelector('img');
  img.src = iconPath;

  element.onmouseenter = function() {
    img.src = iconHoverPath;
  };

  element.onmouseleave = function() {
    img.src = iconPath;
  };
}
