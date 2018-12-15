import React from 'react';
import './auth.scss';
import authRequests from '../../Helpers/Data/authRequests';

class auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate()
      .then(() => {
        this.props.isAuthenticated();
      })
      .catch(error => console.error('there was an error with auth', error));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default auth;
