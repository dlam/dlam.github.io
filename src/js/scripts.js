/* global NavBar: false */
/* global SiteNavigator: false */

window.onload = function() {
  var navContainer = document.querySelector('.navBar');
  var mainContainer = document.querySelector('.mainContainer');
  var siteNavigator = new SiteNavigator(window, mainContainer);
  new NavBar(navContainer, siteNavigator).render();
  siteNavigator.onLoad();
};

