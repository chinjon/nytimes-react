import React from 'react';
import {Item, Button, Icon} from 'semantic-ui-react';
import Radium from 'radium';

// const imgNYTParse = 'https://static01.nyt.com/'

const styles = {
    base: {
        display: 'inline-block',
        margin: '1rem 0 3rem 0',
        width: '100%',
        backgroundColor: "#fff",
        padding: "3rem",
        border: "1px solid #000"
    },
    extra: {
        marginTop: "1rem"
    },
    checkmark: {
        cursor: 'pointer'
    }
}

const SavedArticle = ({item, onClick, upvoting, downvoting}) => {

    function handleClick(articleId, callback) {
        callback(articleId);
    }

    return (
        <Item key={item.articleId} style={styles.base}>
             <Item.Content>
                <Item.Header>
                    <a href={item.url} target="_blank">
                    {item.title}
                    </a>
                </Item.Header>
                <Item.Extra style={styles.extra}>
                    <Icon color="green" name='check' onClick={(event) => upvoting(item.articleId, upvoting)} style={styles.checkmark} /> {item.upvotes} Upvotes
                    &nbsp;&nbsp;&nbsp;
                    <Icon color='red' name='minus' onClick={(event) => downvoting(item.articleId, downvoting)} />
                    {item.downvotes} Downvotes

                    <Button floated="right" size="mini" onClick={(event) => handleClick(item.articleId, onClick)}>Delete</Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default Radium(SavedArticle);