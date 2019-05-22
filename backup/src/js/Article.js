/* exported Article */

var Article = function(parentElement, json) {
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
};

Article.prototype.render = function() {
  var timeStamp;
  if (this.days >= 7) {
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

  var element = document.createElement('div');
  element.className = 'article';

  var articleImg = document.createElement('img');
  articleImg.src = this.articleImg;

  var contentContainer = document.createElement('div');
  contentContainer.className = 'contentContainer';

  var articleTitle = document.createElement('div');
  articleTitle.className = 'title';
  articleTitle.textContent = this.articleTitle;

  var articleDate = document.createElement('div');
  articleDate.className = 'date';
  articleDate.textContent = timeStamp;

  var articleContent = document.createElement('div');
  articleContent.className = 'content';
  articleContent.textContent = this.articleContent;

  contentContainer.appendChild(articleTitle);
  contentContainer.appendChild(articleDate);
  contentContainer.appendChild(articleContent);

  element.appendChild(articleImg);
  element.appendChild(contentContainer);

  this.parentElement.appendChild(element);
};
