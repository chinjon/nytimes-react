import React from 'react';
import {Input} from 'semantic-ui-react';

const SearchInput = (props) => {
    return (
        <Input 
            icon={"search"}
            iconPosition={"left"}
            size={"large"}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default SearchInput;