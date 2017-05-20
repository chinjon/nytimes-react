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

  onQueryChange(query) {
    this.setState({query})
    console.log("Called From App Component: ", query)
  }

  render() {
    return (
      <div style={style.base}>
        <PageHeader />
        <SearchBar onSearchQueryChange={this.onQueryChange.bind(this)} />
      </div>
    );
  }
}

export default Radium(App);
