window.onload = function() {
  var navLinks = document.querySelectorAll('.navBar li');
  navLinks[0].onmouseenter = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_menu_hover.svg';
  };

  navLinks[0].onmouseleave = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_menu.svg';
  };

  navLinks[1].onmouseenter = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_home_hover.svg';
  };

  navLinks[1].onmouseleave = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_home.svg';
  };

  navLinks[2].onmouseenter = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_about_hover.svg';
  };

  navLinks[2].onmouseleave = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_about.svg';
  };

  navLinks[3].onmouseenter = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_blog_hover.svg';
  };

  navLinks[3].onmouseleave = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_blog.svg';
  };

  navLinks[4].onmouseenter = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_projects_hover.svg';
  };

  navLinks[4].onmouseleave = function(e) {
    e.srcElement.querySelector('img').src = './res/img/icon_projects.svg';
  };

  var mainContainer = document.querySelector('.mainContainer');

  var xmlHttp = new XMLHttpRequest();
  var url = 'res/docs/blog/content.json';

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var content = JSON.parse(xmlHttp.responseText);
      for (var i = 0; i < content.length; i++) {
        var articleImg = 'http://orig14.deviantart.net/d109/f/2015/011/e/f/a_few_mountains_ghibli_style_by_tyleredlinart-d55xn04.jpg';
        var articleTitle = content[i].title;
        var articleContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

        mainContainer.innerHTML +=
          '<div class="articleContainer">' +
            '<div class="article">' +
              '<img src="' +
                articleImg +
              '"></img>' +
            '<div class="contentContainer">' +
              '<div class="title">' +
                articleTitle +
              '</div>' +
              '<div class="date">3 days ago</div>' +
              '<div class="content">' +
                articleContent +
              '</div>' +
            '</div>' +
          '</div>';
      }
    }
  }

  xmlHttp.open("GET", url, true);
  xmlHttp.send();
}
