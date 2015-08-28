function Article(parentElement, json) {
  this.parentElement = parentElement;

  this.articleTitle = json.title;
  this.articleContent = json.content;
  this.articleImg = json.image;
  this.articleDate = new Date(parseInt(json.date));

  this.timeDifference = Math.floor(Date.now() - this.articleDate.valueOf());
  this.seconds = Math.floor(this.timeDifference / 1000);
  this.minutes = Math.floor(this.seconds / 60);
  this.hours = Math.floor(this.minutes / 60);
  this.days = Math.floor(this.hours / 24);
}

Article.prototype.render = function() {
  var timeStamp;
  if (this.days >= 7) {
    var now = new Date();
    timeStamp = this.articleDate.getMonth() + '/' + this.articleDate.getDate() + '/' + this.articleDate.getFullYear();
  } else if (this.days !== 0) {
    timeStamp = this.days + ' days ago';
  } else if (this.hours !== 0) {
    timeStamp = this.hours + ' hours ago';
  } else if (this.minutes !== 0) {
    timeStamp = this.minutes + ' minutes ago';
  } else if (this.seconds !== 0) {
    timeStamp = this.seconds + ' seconds ago';
  } else {
    timeStamp = 'Just now';
  }

  // TODO(dustin): Use document.createElement.
  this.parentElement.innerHTML +=
    '<div class="articleContainer">' +
    '<div class="article">' +
    '<img src="' +
    this.articleImg +
    '"></img>' +
    '<div class="contentContainer">' +
    '<div class="title">' +
    this.articleTitle +
    '</div>' +
    '<div class="date">' +
    timeStamp +
    '</div>' +
    '<div class="content">' +
    this.articleContent +
    '</div>' +
    '</div>' +
    '</div>';
};
