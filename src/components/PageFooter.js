import React from 'react';
import { Menu } from 'semantic-ui-react';

import Radium from 'radium';

const style = {
    base: {
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "60px"
    }
}

const PageFooter = () => {
    return (
        <Menu>
        </Menu>
    )
}

export default Radium(PageFooter);