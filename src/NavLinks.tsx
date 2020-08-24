import React, { PureComponent, ReactNode } from 'react'
import './NavLinks.css'
import { ReactComponent as GithubIcon } from './res/icon_github.svg'
import { ReactComponent as LinkedInIcon } from './res/icon_linkedin.svg'
import { ReactComponent as TwitterIcon } from './res/icon_twitter.svg'


class NavLinks extends PureComponent {
  render(): ReactNode {
    return (
      <div className="NavLinks">
        <a href="https://github.com/dlam">
          <GithubIcon className="icon" />
        </a>
        <a href="http://www.linkedin.com/pub/dustin-lam/25/828/178">
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://twitter.com/itsdustinlam/">
          <TwitterIcon className="icon" />
        </a>
      </div>
    )
  }
}

export default NavLinks
