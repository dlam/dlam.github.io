import React, { PureComponent, ReactNode } from 'react'
import { connect, DispatchProp } from 'react-redux'
import './NavDrawer.css'
import NavLinks from './NavLinks'
import { ReactComponent as TalksIcon } from './res/account.svg'
import { ReactComponent as ProjectsIcon } from './res/code-tags.svg'
import { ReactComponent as HomeIcon } from './res/home.svg'
import { ReactComponent as MenuIcon } from './res/menu.svg'
import { ReactComponent as BlogIcon } from './res/pen.svg'

class NavDrawer extends PureComponent<DispatchProp> {
  render(): ReactNode {
    return (
      <div className="NavDrawer">
        <ul>
          <li className="NavButton">
            <MenuIcon className="icon" />
            <span className="label">MENU</span>
          </li>
          <li className="NavButton" onClick={() => this.props.dispatch({ type: "HOME" })}>
            <HomeIcon className="icon" />
            <span className="label">HOME</span>
          </li>
          <li className="NavButton" onClick={() => this.props.dispatch({ type: "TALKS" })}>
            <TalksIcon className="icon" />
            <span className="label">TALKS</span>
          </li>
          <li className="NavButton" onClick={() => this.props.dispatch({ type: "BLOG" })}>
            <BlogIcon className="icon" />
            <span className="label">BLOG</span>
          </li>
          <li className="NavButton" onClick={() => this.props.dispatch({ type: "PROJECTS" })}>
            <ProjectsIcon className="icon" />
            <span className="label">PROJECTS</span>
          </li>
          <NavLinks />
        </ul>
      </div>
    )
  }
}

export default connect()(NavDrawer)
