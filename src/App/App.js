import React, { Component } from 'react';
import connection from '../Helpers/Data/connection';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../components/Auth/auth';

class App extends Component {
  componentDidMount() {
    connection();
  }

  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
