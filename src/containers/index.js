import React from 'react';
import autobind from 'class-autobind';
import { Switch, Route } from 'react-router-dom';
import styles from 'Styles';
import ConfigContainer from 'Containers/config';
import MenuContainer from 'Containers/menu';
import DatabaseContainer from 'Containers/database';
import TableDataContainer from 'Containers/table-data';
import RPCContainer from 'Containers/rpc';

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
                    <Route exact path="/database-tables" component={DatabaseContainer} />
                    <Route exact path="/table-data/:tableName" component={TableDataContainer} />
                    <Route exact path="/rpc" component={RPCContainer} />
                    <Route render={() => {
                        return (
                            <div>
                                <h2>Dashboard</h2>
                            </div>
                        );
                    }} />
                </Switch>
            </div>
        )
    }
}

export default App;