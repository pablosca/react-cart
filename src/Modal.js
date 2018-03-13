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
    this.toggleModalHandler(nextProps.show);
  }
  toggleModalHandler = (show) => {
    this.setState({ show });
  }
  render() {
    return (
      <div className={'modal ' + (this.state.show ? 'show' : 'hide')}>
        <div className="modal-overlay" onClick={this.toggleModalHandler.bind(this, false)}></div>
        <div className="modal-content">
          <div className="modal-title">{this.props.title}</div>
          <div className="modal-body">
            {this.props.children}
          </div>
          <button className="modal-close" onClick={this.toggleModalHandler.bind(this, false)}>&times;</button>
        </div>
      </div>
    );
  }
}

export default Modal;
