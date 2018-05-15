import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container
} from 'semantic-ui-react';

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
          <div>
            <h1>Silver Needle - JS</h1>
            {
                !isAuthenticated() && (
                    <div>
                        <p>Not Logged in</p>
                    </div>
                )
            }
            {
                isAuthenticated() && (
                    <div>
                        <p>Logged in...</p>
                    </div>
                )
            }
            {this.props.children}
          </div>
      );
    }
  }
  
  export default Home;