import React, { Component } from 'react';
import Radium from 'radium';

import SearchBar from './components/SearchBar';
import PageHeader from './components/PageHeader';
import Results from './components/Results';


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
    lineHeight: '3em'
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      query: ""
    }
  }

  searchNYTimes(query) {
    const url = `https://cors.now.sh/https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${KEY}&q=${query}`;

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
    query ? this.searchNYTimes(query) : alert("No term entered!")
  }

  onArticleSave = event => {
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
        { results ? 
          <Results 
            results={results}
          /> : 
          null }
          <div style={style.footer}>
            <p>Built with coffee and anxiety by <a target="_blank" href="https://github.com/chinjon/nytimes-react">Jonathan Chin</a></p>
          </div>
      </div>
    );
  }
}

export default Radium(App);
