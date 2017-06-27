import React from 'react';
import {Item, Container} from 'semantic-ui-react';
import Radium from 'radium';

import ResultItem from './grandchildren/ResultItem';

const style = {
    base: {
        margin: "4em 0 7em 0",
        padding: "1em",
        width: "55%"
    }
}


const Results = (props) => {

        const saveArticle = (event) => {
            event.preventDefault();

            console.log('clicking');
        }

        const items = props.results.map(item => {
            return (
                <ResultItem     
                    item={item}
                    key={item._id}
                    onClick={saveArticle.bind(this)}
                />
            )
        })

        return (
            <Container style={style.base}>
                <Item.Group divided>        
                        {items}                  
                </Item.Group>
            </Container>
        )
}

export default Radium(Results);