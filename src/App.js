import React, { Component } from 'react';

import './App.css';
import Modal from './Modal';
import Cart from './Cart';

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
        <Modal show={this.state.showCart} title="Your Shopping Cart">
          <Cart />
        </Modal>
        <div className="container">
          <button className="btn" onClick={this.showCartHandler.bind(this)}>View Cart</button>
        </div>
      </div>
    );
  }
}

export default App;
