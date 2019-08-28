import React from 'react';

export default props => {
    const { tableName, headers, data } = props;

    return (
        <div>
            <h2>Table Data: <small>{tableName}</small></h2>

            <table>
                <thead>
                    <tr>
                        {headers.map(h => <th key={h}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => <tr key={i}>{row}</tr>)}
                </tbody>
            </table>
        </div>
    )
}