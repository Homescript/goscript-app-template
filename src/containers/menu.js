import React from 'react';
import autobind from 'class-autobind';
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