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
            queries: [],
            _pending: false
        }
    }

    async componentDidMount() {
        const schema = await goscript.database.schema();
        const customQueries = await goscript.database.queries();
        this.setState({
            tables: Object.keys(schema),
            queries: Object.values(customQueries),
        });
    }

    render() {
        return <DatabaseComponent {...this.state} />
    }
}

export default DatabaseContainer;