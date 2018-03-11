import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.show
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.show });
  }
  hideModalHandler = () => {
    this.setState({ show: false });
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-overlay"></div>
        <div className="modal-content">
          <button onClick={this.hideModalHandler}>&times;</button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
