import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Header
} from 'semantic-ui-react';
import Hero from './hero';

class Home extends Component {
    componentWillMount() {
        const { isAuthenticated, getProfile } = this.props.auth;
        if (isAuthenticated() ) {
            getProfile();
        }
    }
    login() {
      this.props.auth.login();
    }
    render() {
      const { isAuthenticated } = this.props.auth;
      return (
        <Container>
                <Hero />
            <div>
                {this.props.children}
            </div>
        </Container>
      );
    }
  }
  
  export default Home;