import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
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
    margin: "0 0 0 0",
    padding: "3rem 0",
    backgroundColor: "#fff"
  },
  resultsList: {
    margin: "5em 0 0 0",
    width: "80%"
  },
  footer: {
    position: "fixed",
    bottom: "0",
    right: "0",
    left: "0",
    paddingTop: '1em',
    width: "100%",
    height: "50px",
    textAlign: "center",
    backgroundColor: "#eee",
    lineHeight: '3em',
    zIndex: "100"
  },
  divider: {
    width: '60%',
    margin: '3rem auto'
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

  savedArticleNotification = () => {
    this.notificationSystem.addNotification({
      message: 'Item has been saved',
      title: 'SUCCESS',
      level: 'success',
      position: 'tr'
    });
  }

  loadSavedArticles() {
    helpers.loadSavedArticles()
    .then(savedArticles => this.setState({savedArticles}))
    .catch(err=> console.log(err))
  }

  onDeleteClick = (articleId) => {
    console.log('onDelete is running', articleId);
    helpers.deleteSavedArticle(articleId);
    this.setState({savedArticles: this.loadSavedArticles()})
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
      results: [],
    })
    query ? this.searchNYTimes(query) : this.noTermEnteredNotification(event)
  }

  onArticleSave = (id) => {
      const {results} = this.state;
      console.log('onArticleSave Running',id)

      function matchArticle(article) {
        return article._id === id;
      }

      helpers.saveArticle(this.extractArticleElements(results.find(matchArticle)));

      this.loadSavedArticles();
  }

  extractArticleElements(article) {
    return {
      articleId: article._id,
      title: article.headline.main,
      url: article.web_url,
      multimedia: article.multimedia[1].url,
      description: article.snippet,
    }
  }

  addUpvote(id) {
    console.log('upvote is working', id);

    helpers.addUpvote(id);
  }

  componentWillMount() {
    this.loadSavedArticles();
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }


  render() {
    const { results, savedArticles, query } = this.state
    return (
      <div style={style.base}>
        <div>
          <PageHeader />
          <SearchBar
            onSearchQueryChange={this.onQueryChange.bind(this)}
            onSearchQuerySubmit={this.onSearchSubmit.bind(this)}
          />

          <NotificationSystem ref="notificationSystem" />
          { results ?
            <div>
            <Divider style={style.divider} />
            <Results
              results={results}
              searchTerm={query}
              onArticleSave={this.onArticleSave}
            /></div>:
            null }

            <Divider style={style.divider} />

            <SavedArticles
              onDeleteClick={this.onDeleteClick.bind(this)}
              savedArticles={savedArticles}
              upvoting={this.addUpvote}/>
          </div>
          <div style={style.footer}>
            <p>Built with coffee and anxiety by <a target="_blank" href="https://github.com/chinjon/nytimes-react">Jonathan Chin</a></p>
          </div>
      </div>
    );
  }
}

export default Radium(App);
