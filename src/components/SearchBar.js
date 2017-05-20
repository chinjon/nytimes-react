import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

import Radium from 'radium';

import SearchInput from './grandchildren/SearchInput';

const style = {
    base: {
        margin: "5em 0 0 0"
    }
}

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ""
        }
    }

    onInputChange(query) {
        this.setState({query});
        this.props.onSearchQueryChange(query);
    }

    render(){
        const { query } = this.state;
        return (
            <Container textAlign="center" style={style.base}>
                <SearchInput 
                    placeholder="Search..."
                    icon="search"
                    value={ query }
                    name="query"
                    label="Query"
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </Container>
        )
    }
}

export default Radium(SearchBar);