import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
    const { tables, queries } = props;

    return (
        <div>
            <h2>Database tables</h2>
            <p>This is a list of all of the database tables for this service.</p>
            <ul>
                {tables.length ?
                    tables.map(t => <li key={t}><Link to={`/table-data/${t}`}>{t}</Link></li>)
                :
                    <li>No database tables found</li>
                }
            </ul>


            <h2>Custom Saved Queries</h2>
            <p>This is a list of all of the saved datasource queries.</p>
            <ul>
                {queries.length ?
                    queries.map(q => <li key={q.id}><b>{q.name}:</b> {q.value}</li>)
                :
                    <li>No queries tables found</li>
                }
            </ul>
        </div>
    )
}