import React from 'react';
import {Input} from 'semantic-ui-react';

const SearchInput = (props) => {
    return (
        <Input 
            fluid={true}
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default SearchInput;