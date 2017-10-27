import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 
import SimpleForm from 'simpleform'; 
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">    
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SimpleForm 
           "name: *",
            "email: *",
            "phone: *",
            "cardnumber: *",
            "cvc: *",
            "expity: MM/YY",
            "address: *",
        />
      </div>
    );
  }
}
 
export default App;
