import React from 'react';

import { Item, Button, Icon } from 'semantic-ui-react';

const noImgPlaceholder = "https://placeholdit.imgix.net/~text?txtsize=26&txt=No+Image+Found&w=150&h=150&txttrack=0"

const imgNYTParse = 'https://static01.nyt.com/'

const ResultItem = ({item}, props) => {
    return (
        <Item key={item._id}>
            <Item.Image 
                src={item.multimedia.length > 0 ? 
                    `${imgNYTParse}${item.multimedia[1].url}` :
                    noImgPlaceholder
                }
                size="small"
            />
            <Item.Content>
                <Item.Header>
                    <a 
                        href={item.web_url}
                        target="_blank"
                    >
                        {item.headline.main}
                    </a>
                </Item.Header>
                <Item.Description>
                    {item.snippet}
                </Item.Description>
                <Item.Extra>
                    <Button 
                        color="teal"
                        compact 
                        floated="right" 
                        size="medium"
                        animated="vertical"
                        key={item._id}
                        onClick={props.onClick}
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

export default ResultItem;