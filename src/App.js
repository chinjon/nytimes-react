import React, { Component } from 'react';
import Radium from 'radium';

import SearchBar from './components/SearchBar';
import PageHeader from './components/PageHeader';

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
    }
  }

  render() {
    return (
      <div style={style.base}>
        <PageHeader />
        <SearchBar />
      </div>
    );
  }
}

export default Radium(App);
