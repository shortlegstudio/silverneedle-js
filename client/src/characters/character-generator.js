import React, { Component } from 'react';
import Name from './name';
import { 
    Button
} from 'semantic-ui-react';
import history from '../history';

class CharacterGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: 'first',
            last_name: 'last'
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.save = this.save.bind(this);
    }

    onNameChange(first, last) {
        this.setState({first_name: first, last_name: last});
    }

    render() {
        return (
            <div>
                <h1>Character Generator</h1>
                <Name first_name={this.state.first_name} last_name={this.state.last_name} onNameChange={this.onNameChange} />
                <div>
                <Button primary onClick={this.save}>Save</Button>
                </div>
            </div>
        );
    }

    async save() {
        await fetch("/characters/create", {
            method: 'post',
            body: JSON.stringify(this.state),
            headers: {"Content-Type": "application/json"}
        }).then(function() {
            history.replace("/characters");
        });
    }
}

export default CharacterGenerator;