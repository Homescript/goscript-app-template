import React from 'react';
import autobind from 'class-autobind';
import goscript from 'custom-ui-api';
import DatabaseComponent from 'Components/database';

class DatabaseContainer extends React.Component {

    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            tables: [],
            _pending: false
        }
    }

    async componentDidMount() {
        const schema = await goscript.database.schema();
        this.setState({
            tables: Object.keys(schema)
        });
    }

    render() {
        return <DatabaseComponent {...this.state} />
    }
}

export default DatabaseContainer;