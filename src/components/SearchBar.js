import React, {Component} from 'react';

import SearchInput from './grandchildren/SearchInput';

class SearchBar extends Component {
    render(){
        return (
            <div>
                <SearchInput 
                    placeholder="Search..."
                />
            </div>
        )
    }
}

export default SearchBar;