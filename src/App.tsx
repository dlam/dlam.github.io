import React, { Component, ReactNode } from 'react'
import './App.css'
import MainContainer from './MainContainer'
import NavDrawer from './NavDrawer'

class App extends Component {
  render(): ReactNode {
    return (
      <div className="App">
        <NavDrawer/>
        <MainContainer/>
      </div>
    )
  }
}

export default App
