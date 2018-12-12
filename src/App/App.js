import React, { Component } from 'react';
import connection from '../Helpers/Data/connection';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../components/Auth/auth';
import Listings from '../Listings/Listings';
import MyNavbar from '../MyNavbar/myNavbar';

class App extends Component {
state = {
  authed: false,
}

componentDidMount() {
  connection();
}

isAuthenticated = () => {
  this.setState({ authed: true });
}

render() {
  if (!this.state.authed) {
    return (
      <div className="App">
        <MyNavbar />
        <Auth isAuthenticated={this.isAuthenticated}/>
      </div>
    );
  }
  return (
      <div className="App">
        <MyNavbar />
        <Listings />
      </div>
  );
}
}

export default App;
