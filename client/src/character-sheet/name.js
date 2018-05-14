import React, { Component } from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';

class Name extends Component {
    constructor(props) {
        super(props);
        this.updateName = this.updateName.bind(this);
        this.onRerollName = this.onRerollName.bind(this);
    }

    render() {
        const name = this.props.name;
        return(
            <Input 
                label="Name" 
                placeholder="Name" 
                action={{ icon: 'undo', onClick: this.onRerollName}} 
                value={name}
                onChange={this.updateName} />
        );
    }

    updateName(e) {
        this.props.onNameChange(e.target.value);
    }
     

    async onRerollName() {
        //Connect to name api and request a new name....
        const response = await fetch("/characters/name/create?race=human");
        const json = await response.json();
        this.props.onNameChange(json.firstname + ' ' + json.lastname);
    }
}

export default Name;