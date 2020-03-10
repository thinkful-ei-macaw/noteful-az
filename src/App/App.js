import React, { Component } from 'react';
import Header from '../Header/Header'
import STORE from '../STORE'
import Sidebar from '../Sidebar/Sidebar'
import NoteList from '../NoteList/NoteList'
import Note from '../Note/Note'
import './App.css'
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    STORE
  }

  render() {
    return (
      <div>
        <Header />
        <div className='App'>
          <Sidebar store={this.state.STORE} />
          <Route exact path={["/folder/:id", "/"]} render={(routerProps) => { return <NoteList store={this.state.STORE} {...routerProps} /> }} />
          <Route exact path="/note/:id" component={Note} />
        </div>
      </div>
    );
  }
}
export default App;