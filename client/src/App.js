import React, { Component } from 'react';
import Radium from 'radium';
import NotificationSystem from 'react-notification-system';

import SearchBar from './components/SearchBar';
import PageHeader from './components/PageHeader';
import Results from './components/Results';
import SavedArticles from './components/SavedArticles';

import helpers from './components/utils/helpers';


import {KEY} from './hide';

const style = {
  base: {
    margin: "2em 0 0 0"
  },
  resultsList: {
    margin: "5em 0 0 0",
    width: "80%"
  },
  footer: {
    position: "fixed",
    bottom: "0",
    left: "0",
    paddingTop: '1em',
    width: "100%",
    height: "50px",
    textAlign: "center",
    backgroundColor: "#eee",
    lineHeight: '3em',
    zIndex: "100"
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      query: "",
      _notificationSystem: null,
      savedArticles: [],
    }
  }

  noTermEnteredNotification = event => {
    event.preventDefault()
    this._notificationSystem.addNotification({
      message: 'No term entered!',
      title: "ERROR",
      level: 'error',
      position: 'tr'
    })
  }

  loadSavedArticles() {
        helpers.loadSavedArticles()
        .then(savedArticles => this.setState({savedArticles}))
        .catch(err=> console.log(err))
  }

  searchNYTimes(query) {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${KEY}&q=${query}`;

    fetch(url).then(response =>response.json()).then(result => {
      this.setState({
        results: result.response.docs
      })
    })
  }

  onQueryChange(query) {
    this.setState({query})
  }

  onSearchSubmit = event =>{
    const {query} = this.state;
    this.setState({
      results: []
    })
    query ? this.searchNYTimes(query) : this.noTermEnteredNotification(event)
  }

  onArticleSave = (id) => {
      // const {results} = this.state;
      // console.log(this.filterArticleFromResults(results, event.target.key))
      console.log('onArticleSave Running',id)
      // console.log(this.state.results);
      // console.log(this.matchArticleToSave(this.state.results))

      function matchArticle(article) {
        return article._id === id;
      }
      console.log(this.state.results.find(matchArticle));
  }

  // filterArticle = (article, matchId) => {
  //   return article._id === matchId;
  // } 

  // matchArticleToSave = (arrArticles,id) => {
  //   arrArticles.find(this.filterArticle(id))
  // }


  componentWillMount() {
    this.loadSavedArticles();
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }


  render() {
    const {results} = this.state
    return (
      <div style={style.base}>
        <PageHeader />
        <SearchBar 
          onSearchQueryChange={this.onQueryChange.bind(this)} 
          onSearchQuerySubmit={this.onSearchSubmit.bind(this)}
        />
        <NotificationSystem ref="notificationSystem" />
        { results ? 
          <Results 
            results={results}
            onArticleSave={this.onArticleSave}
          /> : 
          null }

          <SavedArticles />
          <div style={style.footer}>
            <p>Built with coffee and anxiety by <a target="_blank" href="https://github.com/chinjon/nytimes-react">Jonathan Chin</a></p>
          </div>
      </div>
    );
  }
}

export default Radium(App);
