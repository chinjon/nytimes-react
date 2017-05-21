import React, {Component} from 'react';
import {Container, Form} from 'semantic-ui-react';

import Radium from 'radium';

import SearchInput from './grandchildren/SearchInput';
import InputButton from './grandchildren/InputButton';

const style = {
    base: {
        margin: "5em 0 0 0"
    },
    field: {
        margin: "3em auto"
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

    handleSubmitClick = (event) => {
        event.preventDefault()
        this.props.onSearchQuerySubmit(event);
    }

    render(){
        const { query } = this.state;
        return (
            <Container textAlign="center" style={style.base}>
                <Form>
                <Form.Field
                    width="10"
                    style={style.field}
                >
                    <SearchInput 
                        placeholder="Search..."
                        icon="search"
                        value={ query }
                        name="query"
                        label="Query"
                        onChange={event => this.onInputChange(event.target.value)}
                    />
                </Form.Field>
                    <InputButton 
                        visibleText="Submit"
                        compact={true}
                        animated
                        primary
                        visible
                        hidden
                        size="medium"
                        iconName="arrow right"
                        onClick={this.handleSubmitClick.bind(this)}
                    />
                </Form>
            </Container>
        )
    }
}

export default Radium(SearchBar);