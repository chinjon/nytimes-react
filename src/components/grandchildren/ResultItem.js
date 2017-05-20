import React from 'react';

import { Item} from 'semantic-ui-react';

const ResultItem = (props) => {
    return (
        <Item key={props.key}>
            <Item.Content>
                <Item.Header>
                    {props.title}
                </Item.Header>
                <Item.Description>
                    {props.description}
                </Item.Description>
            </Item.Content>
        </Item>
    )
}

export default ResultItem;