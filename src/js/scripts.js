window.onload = function() {
  var navBar = document.querySelector('.navBar');

  navBar.onmouseenter = function(event) {
    this.style.width = '200px';
  };

  navBar.onmouseleave = function(event) {
    this.style.width = '70px';
  }
}
