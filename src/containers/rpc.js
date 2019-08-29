import React from 'react';
import autobind from 'class-autobind';
import goscript from 'goscript-app-api';
import RPCComponent from 'Components/rpc';

class RPCContainer extends React.Component {

    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            name: '',
            data: '',
            response: '',
            error: null,
            _pending: false
        }
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: null,
        });
    }

    async onSubmit(evt) {
        evt.preventDefault();

        if (!this.state.name) {
            return this.setState({
                error: "Missing RPC name",
            });
        }

        this.setState({
            _pending: true,
            error: null,
        }, async () => {

            // Validate the json data
            try {
                const parsed = this.state.data === '' ? {} : JSON.parse(this.state.data);

                // Call the GoScript service RPC
                const response = await goscript.service.callRpc(this.state.name, parsed);

                // Update the state with the response
                this.setState({
                    response: JSON.stringify(response, null, 2),
                    _pending: false,
                    error: null,
                });
            } catch (e) {
                console.error(e);
                this.setState({
                    error: "Invalid data. Data must be a valid JSON object",
                    _pending: false,
                });
            }
        });
    }

    render() {
        return <RPCComponent {...this.state} onSubmit={this.onSubmit} onChange={this.onChange} />
    }
}

export default RPCContainer;