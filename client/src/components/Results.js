import React from 'react';
import {Item, Container} from 'semantic-ui-react';
import Radium from 'radium';
import FlipMove from 'react-flip-move';

import ResultItem from './grandchildren/ResultItem';
// import { helpers } from './utils/helpers'

const style = {
    base: {
        margin: "3em 0 3em 0",
        padding: "1rem",
        width: "55%",
        height: "auto"
    },
    searchText: {
        textAlign: "center"
    }
}

const Results = (props) => {


        const items = props.results.map(item => {
            return (
                <ResultItem     
                    item={item}
                    key={item._id}
                    onClick={props.onArticleSave}
                />
            )
        })

        return (
            <Container style={style.base}>
                <Item.Group>
                    {items.length > 0 ? <h1>Search Results for <em>{props.searchTerm}</em></h1> : <p style={style.searchText}>Search For Something...</p>}

                    <FlipMove duration={250} easing="ease-in">    
                        {items}                  
                    </FlipMove>
                </Item.Group>
            </Container>
        )
}

export default Radium(Results);