import React from 'react';
import autobind from 'class-autobind';
import { Switch, Route } from 'react-router-dom';
import styles from 'Styles';
import ConfigContainer from 'Containers/config';
import MenuContainer from 'Containers/menu';

class App extends React.Component {

    constructor(props) {
        super(props);
        autobind(this);
    }

    render() {
        return (
            <div className={styles.content.container}>
                <MenuContainer />
                <Switch>
                    <Route exact path="/config" component={ConfigContainer} />
                    <Route render={() => {
                        return <div>
                            <p>Dashboard</p>
                        </div>
                    }} />
                </Switch>
            </div>
        )
    }
}

export default App;