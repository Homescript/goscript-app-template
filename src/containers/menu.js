import React from 'react';
import autobind from 'class-autobind';
import goscript from 'custom-ui-api';
import MenuComponent from 'Components/menu';

class MenuContainer extends React.Component {

    constructor(props) {
        super(props);
        autobind(this);
    }

    render() {
        return <MenuComponent />
    }
}

export default MenuContainer;