window.onload = function() {
  // TODO(dustin): Abstract this into a navLink class.
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
        var articleTitle = content[i].title;
        var articleContent = content[i].content;
        var articleImg = content[i].image;
        var articleDate = new Date(parseInt(content[i].date));

        var timeDifference = Math.floor(Date.now() - articleDate.valueOf());
        var seconds = Math.floor(timeDifference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        var timeStamp;
        if (days >= 7) {
          var now = new Date();
          timeStamp = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear();
        } else if (days !== 0) {
          timeStamp = days + ' days ago';
        } else if (hours !== 0) {
          timeStamp = hours + ' hours ago';
        } else if (minutes !== 0) {
          timeStamp = minutes + ' minutes ago';
        } else if (seconds !== 0) {
          timeStamp = seconds + ' seconds ago';
        } else {
          timeStamp = 'Just now';
        }

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
              '<div class="date">' +
                timeStamp +
              '</div>' +
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
