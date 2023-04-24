import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { Action, createStore, Reducer } from 'redux'
import App from './App'
import Article from './Article'
import './index.css'
import * as serviceWorker from './serviceWorker'

ReactGA.initialize('UA-44768148-1')
ReactGA.pageview(window.location.pathname + window.location.search)

const talks: Article[] = [
  {
    "url": "https://www.youtube.com/watch?v=03T-ARIo0t8",
    "img": "talk4.png",
    "title": "Kotlin Multiplatform conversions at Android Jetpack scale",
    "date": "April 2023",
    "content": "KotlinConf '23, Amsterdam, NL"
  },
  {
    "url": "https://www.youtube.com/watch?v=yszRpGp3ijI",
    "img": "talk3.png",
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
    "url": "https://www.youtube.com/watch?v=ZffMCJdA5Qc",
    "img": "talk1.png",
    "title": "Improving App Performance with Benchmarking",
    "date": "May 2019",
    "content": "Google I/O '19, Mountain View, CA"
  },
]

const podcasts: Article[] = [
  {
    "url": "http://androidbackstage.blogspot.com/2020/10/episode-151-paging3.html",
    "img": "podcast2.png",
    "title": "ADB Episode 151: Paging3",
    "date": "October 2020",
    "content": "Romain and Chet talked with Dustin Lam and Chris Craik from the Toolkit team about Paging3"
  },
  {
    "url": "http://androidbackstage.blogspot.com/2019/09/episode-121-benchmarking.html",
    "img": "podcast1.png",
    "title": "ADB Episode 121: Benchmarking",
    "date": "September 2019",
    "content": "In this episode, we chat with Chris Craik and Dustin Lam from the AndroidX team about benchmarking"
  },
]

// TODO(dustin): Move this into its own file.
const reducer: Reducer<Article[], Action<string>> = (state, action): Article[] => {
  switch (action.type) {
    case "TALKS":
      return talks
    case "PODCASTS":
      return podcasts
    case "BLOG":
      return []
    default:
      return state!
  }
}
const store = createStore(reducer, talks)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
