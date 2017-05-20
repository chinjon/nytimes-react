import React, { Component } from 'react';
import Radium from 'radium';

import SearchBar from './components/SearchBar';
import PageHeader from './components/PageHeader';

import {KEY} from './hide';

const style = {
  base: {
    margin: "2em 0 0 0"
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

    fetch(url).then(response =>response.json()).then(result=> console.log(result))
  }

  render() {
    return (
      <div style={style.base}>
        <PageHeader />
        <SearchBar onSearchQueryChange={this.searchNYTimes} />
      </div>
    );
  }
}

export default Radium(App);
