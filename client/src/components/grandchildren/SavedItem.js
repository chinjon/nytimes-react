import React from 'react';
import {Item, Icon} from 'semantic-ui-react';
import Radium from 'radium';

// const imgNYTParse = 'https://static01.nyt.com/'

const styles = {
    base: {
        display: 'inline-block',
        margin: '1rem 0 3rem 0',
        width: '100%',
        backgroundColor: "#fff",
        padding: "3rem",
        border: "1px solid #ddd"
    }
}

const SavedItem = ({item}) => {
    return (
        <Item key={item._id} style={styles.base}>
             <Item.Content>
                <Item.Header>
                    <a href={item.url} target="_blank">
                    {item.title}
                    </a>
                </Item.Header>
                <Item.Description></Item.Description>
                <Item.Extra>
                    <Icon color="green" name='check' /> {item.upvotes} Upvotes
                    &nbsp;&nbsp;&nbsp;
                    <Icon color='red' name='minus' />
                    {item.downvotes} Downvotes
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default Radium(SavedItem);