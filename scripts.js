window.onload = function() {
  var navBar = document.getElementById('navBar');

  navBar.onmouseenter = function(event) {
    this.style.width = '200px';
  };

  navBar.onmouseleave = function(event) {
    this.style.width = '50px';
  }
}
