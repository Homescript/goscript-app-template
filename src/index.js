import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'Containers';
import goscript from '@goscript/goscript-app-api';

// render a loading status while GoScript is configuring itself
ReactDOM.render(<small>Loading...</small>, document.getElementById('root'));

goscript.init()
.then(() => {
    // setTimeout here to load the .less styles in dev
    setTimeout(() => {
        ReactDOM.render(
            <BrowserRouter basename={`/app/${process.env.SERVICE_ID}`}>
                <App />
            </BrowserRouter>,
            document.getElementById('root')
        )
    }, 5);
});