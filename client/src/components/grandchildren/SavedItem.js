import React from 'react';
import {Item, Button, Icon} from 'semantic-ui-react';
import Radium from 'radium';

// const imgNYTParse = 'https://static01.nyt.com/'

const styles = {
    base: {
        display: 'inline-block',
        margin: '1rem 0 3rem 0',
        width: '100%'
    }
}

const SavedItem = ({item}) => {
    return (
        <Item key={item._id} style={styles.base}>
             <Item.Content>
                <Item.Header>{item.title}</Item.Header>
                <Item.Description></Item.Description>
                <Item.Extra>
                    <Icon color="green" name='check' /> 13 Votes
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default Radium(SavedItem);