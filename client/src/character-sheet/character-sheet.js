import React, { Component } from 'react';
import './character-sheet.css';
import Name from './name/name';

class CharacterSheet extends React.Component {
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
                <h1>Character Sheet</h1>
                <Name name={this.state.name} onNameChange={this.onNameChange} />
            </div>
        );
    }
}

export default CharacterSheet;