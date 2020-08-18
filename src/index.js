import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';

import { createStore } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-44768148-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const talks = [
  {
    "url": "https://www.youtube.com/watch?v=yszRpGp3ijI",
    "img": "talk2.png",
    "title": "Fighting Regressions with Benchmarks in CI (extended)",
    "date": "November 2019",
    "content": "Droidcon Toronto '19, Toronto, ON"
  },
  {
    "url": "https://www.youtube.com/watch?v=ynBPcFs6OOk",
    "img": "talk2.png",
    "title": "Fighting Regressions with Benchmarks in CI",
    "date": "October 2019",
    "content": "Android Dev Summit '19, Sunnyvale, CA"
  },
  {
    "url":"https://www.youtube.com/watch?v=ZffMCJdA5Qc",
    "img":"talk1.png",
    "title":"Improving App Performance with Benchmarking",
    "date":"May 2019",
    "content":"Google I/O '19, Mountain View, CA"
  }
];

// TODO(dustin): Move this into its own file.
const store = createStore((state, action) => {
  switch (action.type) {
    case "HOME":
      return [];
    case "TALKS":
      return talks;
    case "BLOG":
      return [];
    case "PROJECTS":
      return [];
    default:
      return state;
  }
}, talks);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
