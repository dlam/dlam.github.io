// TODO(dustin): Generate this dynamically via Grunt.
MENU_LINKS = [
  'menu',
  'home',
  'about',
  'blog',
  'projects'
]

window.onload = function() {
  var navLinks = document.querySelectorAll('.navBar li');
  for (var i = 0; i < navLinks.length; i++) {
    var navLink = new NavLink(navLinks[i], './res/img/icon_' + MENU_LINKS[i] +'.svg', './res/img/icon_' + MENU_LINKS[i] + '_hover.svg');
    navLink.render();
  }

  var mainContainer = document.querySelector('.mainContainer');

  var xmlHttp = new XMLHttpRequest();
  var url = 'res/docs/blog/content.json';

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var content = JSON.parse(xmlHttp.responseText);
      for (var i = 0; i < content.length; i++) {
        // TODO(dustin): Abstract this into its own class.
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
          timeStamp = articleDate.getMonth() + '/' + articleDate.getDate() + '/' + articleDate.getFullYear();
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
