import React from 'react';
import {Input} from 'semantic-ui-react';

const SearchInput = (props) => {
    return (
        <Input 
            icon={props.icon}
            iconPosition={props.iconPosition}
            size={props.size}
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            label={props.label}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default SearchInput;