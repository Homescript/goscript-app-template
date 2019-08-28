import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    const { tables } = props;

    return (
        <div>
            <h2>Database tables</h2>
            <p>This is a list of all of the database tables for this service.</p>
            {tables.length ?
                tables.map(t => <li key={t}><Link to={`/table-data/${t}`}>{t}</Link></li>)
            :
                <li>No database tables found</li>
            }
        </div>
    )
}