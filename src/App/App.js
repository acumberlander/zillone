import React, { Component } from 'react';
import connection from '../Helpers/Data/connection';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../components/Auth/auth';
import Listings from '../Listings/Listings';

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
        <Auth isAuthenticated={this.isAuthenticated}/>
      </div>
    );
  }
  return (
      <div className="App">
        <Listings />
      </div>
  );
}
}

export default App;
