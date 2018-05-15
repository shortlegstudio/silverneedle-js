import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Header,
    Segment
} from 'semantic-ui-react';

class Hero extends Component {
    render() {
        return (
        <Container text>
            <Segment inverted>
            <Header as='h1'>Silver Needle - JS</Header>
            <Header as='h2'>RPG Character Generator</Header>
            <p>Making characters that you would want to play</p>
            </Segment>
        </Container>
        );
    }
}

export default Hero;