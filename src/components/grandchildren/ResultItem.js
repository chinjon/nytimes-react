import React from 'react';

import { Item} from 'semantic-ui-react';

const noImgPlaceholder = "https://placeholdit.imgix.net/~text?txtsize=26&txt=No+Image+Found&w=150&h=150&txttrack=0"

const imgNYTParse = 'https://static01.nyt.com/'

const ResultItem = ({item}) => {
    return (
        <Item>
            <Item.Image 
                src={item.multimedia ? 
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
            </Item.Content>
        </Item>
    )
}

export default ResultItem;