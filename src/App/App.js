import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../Helpers/Data/connection';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../components/Auth/auth';
import Listings from '../Listings/Listings';
import MyNavbar from '../MyNavbar/myNavbar';
import authRequests from '../Helpers/Data/authRequests';

class App extends Component {
state = {
  authed: false,
}

componentDidMount() {
  connection();
  this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        authed: true,
      });
    } else {
      this.setState({
        authed: false,
      });
    }
  });
}

componentWillUnmount() {
  this.removeListener();
}

isAuthenticated = () => {
  this.setState({ authed: true });
}

render() {
  const logoutClickEvent = () => {
    authRequests.logoutUser();
    this.setState({ authed: false });
  };

  if (!this.state.authed) {
    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent}/>
        <Auth isAuthenticated={this.isAuthenticated}/>
      </div>
    );
  }
  return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent}/>
        <Listings />
      </div>
  );
}
}

export default App;
