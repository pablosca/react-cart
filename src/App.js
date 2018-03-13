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
        <Modal show={this.state.showCart}>
          <Cart />
        </Modal>
        <div className="container">
          <button className="view-cart-btn" onClick={this.showCartHandler.bind(this)}>View Cart</button>
        </div>
      </div>
    );
  }
}

export default App;
