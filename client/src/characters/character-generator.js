import React, { Component } from 'react';
import Name from './name';

class CharacterGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "---"
        };

        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(name) {
        this.setState({name: name});
    }

    render() {
        return (
            <div>
                <h1>Character Generator</h1>
                <Name name={this.state.name} onNameChange={this.onNameChange} />
            </div>
        );
    }
}

export default CharacterGenerator;