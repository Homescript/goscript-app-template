import React from 'react';
import autobind from 'class-autobind';
import goscript from 'goscript-app-api';
import ConfigComponent from 'Components/config';

class ConfigContainer extends React.Component {

    constructor(props) {
        super(props);
        autobind(this);

        this.state = {
            name: '',
            _pending: false
        }
    }

    onChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    onSubmit(evt) {
        evt.preventDefault();

        this.setState({
            _pending: true,
        }, async () => {
            let config = {
                name: this.state.name
            };
            await goscript.service.updateConfig(config);
            this.setState({
                _pending: false
            });
        });
    }

    async componentDidMount() {
        const config = await goscript.service.config();
        this.setState(config);
    }

    render() {
        return <ConfigComponent {...this.state} onChange={this.onChange} onSubmit={this.onSubmit} />
    }
}

export default ConfigContainer;