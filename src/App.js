import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import PageHeader from './components/PageHeader';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <SearchBar />
      </div>
    );
  }
}

export default App;
