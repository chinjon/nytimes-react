import React from 'react';
import { Item, Container } from 'semantic-ui-react';
import Radium from 'radium';
import FlipMove from 'react-flip-move';
import SavedArticle from './grandchildren/SavedArticle';

const styles = {
    base: {
        margin: "1em 0 3em 0",
        padding: "1em",
        width: "50%"
    },
    group: {
        margin: '0 auto',
    },
    noSavedYetMessage: {
        textAlign: 'center'
    }
}

const SavedArticles = (props) => {

    const renderSavedItems = props.savedArticles.map(item => {
        return (
            <SavedArticle
                item={item}
                key={item._id}
                onClick={props.onDeleteClick}
                upvoting={props.upvoting}
                downvoting={props.downvoting}
            />
        )
    })

    return (
        <Container style={styles.base}>
            <Item.Group style={styles.group}>
                {props.savedArticles.length > 0 ?<h1>Saved Articles</h1> : null}
                <FlipMove duration={350} easing="ease-in">
                    {props.savedArticles.length > 0 ?renderSavedItems : <p style={styles.noSavedYetMessage}>No saved articles yet...</p>}
                </FlipMove>
            </Item.Group>
        </Container>
    )
}

export default Radium(SavedArticles);