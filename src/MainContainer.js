import React from 'react';
import { connect } from 'react-redux';
import './MainContainer.css';

import Article from './Article';

function mapStateToProps(state) {
  return {
    state: state
  };
}

function MainContainer({ state, dispatch }) {
  return (
    <div className="MainContainer">
      {
        state.map(article => (
          <Article
            url={article.url}
            img={article.img}
            title={article.title}
            date={article.date}
            content={article.content} />
        ))
      }
    </div>
  );
}

export default connect(mapStateToProps)(MainContainer);
