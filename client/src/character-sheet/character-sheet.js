import React, { Component } from 'react';
import './character-sheet.css';
import Name from './name/name';

class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Character Sheet</h1>
                <Name />
            </div>
        );
    }
}

export default CharacterSheet;