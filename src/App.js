import React, { Component } from 'react';
import Header from './Header'
import STORE from './STORE'
import Sidebar from './Sidebar'
import { render } from '@testing-library/react';

class App extends Component {
  state = {
    STORE
  }

  render() {
    return (
      <div>
        <Header />
        <main className='App'>
          <Sidebar store={this.state.STORE}/>
        </main>
      </div>
    );
  }
}
export default App;