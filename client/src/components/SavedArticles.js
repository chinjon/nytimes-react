import React from 'react';
import { Item, Container } from 'semantic-ui-react';
import Radium from 'radium';

import SavedItem from './grandchildren/SavedItem';

const styles = {
    base: {
        margin: "4em 0 10em 0",
        padding: "1em",
        width: "55%"
    },
    group: {
        margin: '0 auto',
        display: 'inline-block',
    }
}

const SavedArticles = (props) => {

    const renderSavedItems = props.savedArticles.map(item => {
        return (
            <SavedItem 
                item={item}
                key={item._id}
            />
        )
    })

    return (
        <Container style={styles.base}>
            <Item.Group style={styles.group}>
                {renderSavedItems}
            </Item.Group>
        </Container>
    )
}

export default Radium(SavedArticles);