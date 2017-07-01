import React from 'react';
import { Item, Button, Icon } from 'semantic-ui-react';
import Radium from 'radium';

// const noImgPlaceholder = "https://placeholdit.imgix.net/~text?txtsize=26&txt=No+Image+Found&w=150&h=150&txttrack=0"

// const imgNYTParse = 'https://static01.nyt.com/'

const styles = {
    base: {
        padding: "1rem",
        backgroundColor: "#fff",
        marginBottom: "1rem",
        border: "1px solid #000"
    },
    content: {
        padding: "2rem"
    },
    extra: {
        marginTop: "1rem"
    }
}


const ResultItem = ({item, onClick}) => {

    function handleClick(id) {
        onClick(id);
    }

    return (
        <Item key={item._id} style={styles.base}>
            <Item.Content style={styles.content}>
                <Item.Header>
                    <a 
                        href={item.web_url}
                        target="_blank"
                    >
                        {item.headline.main}
                    </a>
                </Item.Header>
                <Item.Extra style={styles.extra}>
                    <Button 
                        color="teal"
                        compact 
                        floated="right" 
                        size="medium"
                        animated="vertical"
                        key={item._id}
                        onClick={(event) => handleClick(item._id)}
                    >
                        <Button.Content hidden>
                            Save
                        </Button.Content>
                        <Button.Content visible>
                        <Icon name="save"/>
                        </Button.Content>
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}

export default Radium(ResultItem);