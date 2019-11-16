import React from 'react';
import './MainContainer.css';

import Article from './Article';

function MainContainer() {
  return (
    <div className="MainContainer">
      <Article
        url="https://www.youtube.com/watch?v=ynBPcFs6OOk"
        img="talk2.png"
        title="Fighting Regressions with Benchmarks in CI"
        date="October 2019"
        content="Android Dev Summit '19, Sunnyvale, CA" />
      <Article
        url="https://www.youtube.com/watch?v=ZffMCJdA5Qc"
        img="talk1.png"
        title="Improving App Performance with Benchmarking"
        date="May 2019"
        content="Google I/O '19, Mountain View, CA" />
    </div>
  );
}

export default MainContainer;
