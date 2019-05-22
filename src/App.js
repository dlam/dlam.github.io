import React from 'react';
import './App.css';

import MainContainer from './MainContainer';
import NavDrawer from './NavDrawer';

function App() {
  return (
    <div className="App">
      <NavDrawer/>
      <MainContainer/>
    </div>
  );
}

export default App;
