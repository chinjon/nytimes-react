import React from 'react';
import { Item, Container } from 'semantic-ui-react';
import Radium from 'radium';
import FlipMove from 'react-flip-move';
import SavedItem from './grandchildren/SavedItem';

const styles = {
    base: {
        margin: "1em 0 10em 0",
        padding: "1em",
        width: "50%"
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
                <h1>Saved Articles</h1>
                <FlipMove duration={350} easing="ease-in">
                    {renderSavedItems}
                </FlipMove>
            </Item.Group>
        </Container>
    )
}

export default Radium(SavedArticles);