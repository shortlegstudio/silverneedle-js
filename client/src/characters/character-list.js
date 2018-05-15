import React, { Component } from 'react';
import {
    Button, 
    Container,
    Icon,
    Menu,
    Segment,
    Table
} from 'semantic-ui-react';

class CharacterList extends Component {
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <Segment>
                <Menu attached='top' compact>
                    <Menu.Menu position='right'>
                        <Menu.Item><Button color='blue' href='/characters/generator'><Icon name='add' />New</Button></Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>Name</Table.Cell>
                            <Table.Cell>Actions</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                </Table>
            </Segment>
        );
    }
}

export default CharacterList;