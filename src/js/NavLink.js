// TODO(dustin): Generate this dynamically via Grunt.
// TODO(dustin): Generate NavLinks from a NavBar class.
MENU_LINKS = [
  'menu',
  'home',
  'about',
  'blog',
  'projects'
];

function NavLink(parentElement, index) {
  this.parentElement = parentElement;
  this.index = index;

  this.render = function() {
    var iconPath = './res/img/icon_' + MENU_LINKS[this.index] +'.svg';
    var iconHoverPath = './res/img/icon_' + MENU_LINKS[this.index] + '_hover.svg';

    var element = document.createElement('li');
    element.className = 'navButton';

    var imgElement = document.createElement('img');
    imgElement.src = iconPath;
    element.appendChild(imgElement);

    var titleElement = document.createElement('span');
    titleElement.textContent = MENU_LINKS[this.index].toUpperCase();
    element.appendChild(titleElement);

    this.parentElement.appendChild(element);

    element.onmouseenter = function() {
     imgElement.src = iconHoverPath;
    };

    element.onmouseleave = function() {
     imgElement.src = iconPath;
    };
  };
}
