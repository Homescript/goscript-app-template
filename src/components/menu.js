import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'Styles';

export default props => {
    const { } = props;

    return (
        <div className={styles.menu.container}>
            <NavLink exact to="/" className={styles.menu.link} activeClassName={styles.menu.active}>Home</NavLink>
            <NavLink exact to="/config" className={styles.menu.link} activeClassName={styles.menu.active}>Config</NavLink>
            <NavLink exact to="/database-tables" className={styles.menu.link} activeClassName={styles.menu.active}>Database Tables</NavLink>
        </div>
    )
}