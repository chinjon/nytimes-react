import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const InputButton = (props) => {
    return (
        <Button
            primary={props.primary}
            content={props.content}
            animated={props.animated}
            compact={props.compact}
            size={props.size}
            onClick={props.onClick}
        >
            <Button.Content visible={props.visible}>
                {props.visibleText}
            </Button.Content>
            <Button.Content hidden={props.hidden}>
                <Icon name={props.iconName}/>
            </Button.Content>
        </Button>
    )
}

export default InputButton;