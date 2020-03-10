import React, { Component } from 'react';
import Header from '../Header/Header'
import STORE from '../STORE'
import Sidebar from '../Sidebar/Sidebar'
import Note from '../Note/Note'
import './App.css'
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    STORE
  }

  render() {
    return (
      <div className='App'>
        <Route exact path="/" component={Header}></Route>
        <Header />
        <Sidebar store={this.state.STORE} />
        <Note store={this.state.STORE} />
      </div>
    );
  }
}
export default App;