import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const PageHeader = () => {
    return (
        <Header size="large" icon textAlign="center">
            <Icon name="newspaper"/>
            New York Times Search
        </Header>
    )
}

export default PageHeader;