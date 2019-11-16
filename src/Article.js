import React from 'react';
import './Article.css';

function Article(props) {
  return (
    <a href={props.url}>
      <div className="Article">
        <img src={require(`./res/${props.img}`)} alt="" />
        <div className="contentContainer">
          <div className="title">
            {props.title}
          </div>
          <div className="date">
            {props.date}
          </div>
          <div className="content">
            {props.content}
          </div>
        </div>
      </div>
    </a>
  );
}

export default Article;
