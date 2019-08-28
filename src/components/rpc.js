import React from 'react';
import styles from 'Styles';

export default props => {
    const { name, data, response, error, _pending, onSubmit, onChange } = props;

    return (
        <div>
            <h2>Remote Procedure Call to a GoScript Service</h2>
            <p>This is an example of how to call an RPC method in a service.</p>

            <form onSubmit={onSubmit}>
                <div className={styles.form.row}>
                    <div className={styles.form.label}>RPC Method Name</div>
                    <div className={styles.form.input}><input type="text" name="name" value={name} onChange={onChange} disabled={_pending} /></div>
                </div>
                <div className={styles.form.row}>
                    <div className={styles.form.label}>Data to send</div>
                    <div className={styles.form.input}><textarea name="data" value={data} onChange={onChange} disabled={_pending}></textarea></div>
                </div>
                {error ? <span className={styles.form.error}>{error}</span> : null}
                {_pending ? "calling rpc..." : <input type="submit" value="Call RPC" className={styles.form.submit} />}
                <div className={styles.form.row}>
                    <div className={styles.form.label}>Response</div>
                    <pre><code>{response||'no response'}</code></pre>
                </div>
            </form>
        </div>
    )
}