import React from 'react';
import autobind from 'class-autobind';
import goscript from '@goscript/goscript-app-api';
import TableDataComponent from 'Components/table-data';

class TableDataContainer extends React.Component {

    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            tableName: props.match.params.tableName || '',
            headers: [],
            data: [],
            _pending: true
        }
    }

    async componentDidMount() {
        const schema = await goscript.database.schema();

        const rawData = await schema[this.state.tableName].limit(10).run();

        let headers = [];
        const data = rawData.map(row => {
            if (!headers.length) {
                headers = Object.keys(row.data);
            }
            return Object.values(row.data).map((r, i) => {
                return <td key={i}>{r}</td>
            });
        });

        this.setState({
            headers,
            data,
            _pending: false,
        });
    }

    render() {
        return <TableDataComponent {...this.state} />
    }
}

export default TableDataContainer;