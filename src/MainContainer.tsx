import React, { Component, ReactNode } from 'react'
import { connect, DispatchProp } from 'react-redux'
import Article from './Article'
import ArticleComponent from './ArticleComponent'
import './MainContainer.css'

type StateProps = {
  state: Array<Article>
}

function mapStateToProps(state: Array<Article>): { state: Array<Article> } {
  return { state: state }
}

class MainContainer extends Component<StateProps & DispatchProp> {
  render(): ReactNode {
    return (
      <div className="MainContainer">
        {
          this.props.state.map(article => (
            <ArticleComponent
              url={article.url}
              img={article.img}
              title={article.title}
              date={article.date}
              content={article.content} />
          ))
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainContainer)
