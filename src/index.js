import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from 'Containers';
import goscript from 'custom-ui-api';

// render a loading status while GoScript is configuring itself
ReactDOM.render(<small>Loading...</small>, document.getElementById('root'));

goscript.init(process.env.API_KEY, process.env.SERVICE_ID)
.then(() => {
    const history = createBrowserHistory();

    // setTimeout here to load the .less styles in dev
    setTimeout(() => {
        ReactDOM.render(
            <BrowserRouter history={history} basename={`/app/${process.env.SERVICE_ID}`}>
                <App />
            </BrowserRouter>,
            document.getElementById('root')
        )
    }, 5);
});