import React, { PureComponent, ReactNode } from 'react'
import Article from './Article'
import './ArticleComponent.css'

class ArticleComponent extends PureComponent<Article> {
  render(): ReactNode {
    return (
      <a href={this.props.url}>
        <div className="Article">
          <img src={require(`./res/${this.props.img}`)} alt="" />
          <div className="contentContainer">
            <div className="title">
              {this.props.title}
            </div>
            <div className="date">
              {this.props.date}
            </div>
            <div className="content">
              {this.props.content}
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default ArticleComponent
