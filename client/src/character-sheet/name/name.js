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
     

    onRerollName() {
        //Connect to name api and request a new name....
        fetch("/characters/name/create")
            .then(res => res.json())
            .then(
                (result) => { this.props.onNameChange(result.firstname + ' ' + result.lastname) },
                (error) => { alert(error.message); }
            );
    }
}

export default Name;