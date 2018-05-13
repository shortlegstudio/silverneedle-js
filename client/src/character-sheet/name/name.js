import React, { Component } from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';

class Name extends Component {
    render() {
        return(
            <Input label="Name" labelPosition="left" placeholder="Name" action={{ icon: 'undo', onClick: this.onRerollName}} />
        );
    }

    onRerollName() {
        //Connect to name api and request a new name....
    }
}

export default Name;