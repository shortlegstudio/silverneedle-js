import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from 'semantic-ui-react'

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <List divided relaxed>
        {this.state.users.map(user =>
          <List.Item>{user.username}</List.Item>
        )}
        </List>
      </div>
    );
  }
}

export default App;
