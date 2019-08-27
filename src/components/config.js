import React from 'react';
import styles from 'Styles';

export default props => {
    const { onChange, onSubmit, name, _pending } = props;

    return (
        <div>
            <h2>Configuration</h2>
            <p>The values here are used to configure the service.</p>

            <form onSubmit={onSubmit}>
                <div className={styles.form.row}>
                    <div className={styles.form.label}>Name</div>
                    <div className={styles.form.input}><input type="text" name="name" value={name} onChange={onChange} disabled={_pending} /></div>
                </div>
                {_pending ? "saving..." : <input type="submit" value="Save config" className={styles.form.submit} />}
            </form>
        </div>
    )
}