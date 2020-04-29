import React from 'react';
import styles from 'Styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
export default () => {
    return (
        <div className={styles.main.loadingContainer}>
            <FontAwesomeIcon icon={faCircleNotch} spin className={styles.main.loadingIcon} />
        </div>
    )
}