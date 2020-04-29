import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'Containers';
import Loading from 'Components/utils/loading';
import goscript from '@goscript/goscript-app-api';
import styles from 'Styles';

// render a loading status while GoScript is configuring itself
setTimeout(() => {
    ReactDOM.render(
        <div className={styles.main.initialLoadingContainer}>
            <Loading />
        </div>, document.getElementById('root'));
}, 10);

goscript.init(process.env.SERVICE_ID)
.then(() => {
    // setTimeout here to load the .less styles in dev
    setTimeout(() => {
        ReactDOM.render(
            <BrowserRouter basename={__webpack_public_path__}>
                <App />
            </BrowserRouter>,
            document.getElementById('root')
        )
    }, 5);
}).catch(e=>{}); // first init will reject when removing token from url