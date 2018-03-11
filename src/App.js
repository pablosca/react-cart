import React, { Component } from 'react';

import './App.css';
import Modal from './Modal';

class App extends Component {
  state = {
    showCart: false
  }
  showCartHandler = () => {
    this.setState({ showCart: true});
  }
  render() {
    return (
      <div className="app">
        <Modal show={this.state.showCart}>
          Content for modal.
        </Modal>
        <button onClick={this.showCartHandler.bind(this)}>View Cart</button>
      </div>
    );
  }
}

export default App;
