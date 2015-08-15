function Article(parentContainer, json) {
  this.parentContainer = parentContainer;

  var articleTitle = json.title;
  var articleContent = json.content;
  var articleImg = json.image;
  var articleDate = new Date(parseInt(json.date));

  var timeDifference = Math.floor(Date.now() - articleDate.valueOf());
  var seconds = Math.floor(timeDifference / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  this.render = function() {
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

    this.parentContainer.innerHTML +=
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
  };
}
