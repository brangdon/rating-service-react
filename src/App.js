import React, { Component } from 'react';
import './App.css';
import Movies from './container/moviescontainer'

class App extends Component {
  render() {
    return (
        <div className = "App">
          <header className = "App-header">

            <Movies/>
          </header>
        </div>
    );
  }
}
export default App;