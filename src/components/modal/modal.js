import React, { Component } from 'react';

import Button from '../button/button';

import './modal.css';
import arrowRight from '../../assets/arrow-right.svg';
import cross from '../../assets/cross.svg';

class Modal extends Component {
  render() {
    if(!this.props.isOpen) {
      return null;
    }

    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal__header">
            <h3>{this.props.heading}</h3>
            {
              this.props.onClose ?
                <button className="modal__close" onClick={this.props.onClose}>
                  <img src={cross} alt="" />
                </button> 
                : null
            }
          </div>
          <div className="modal__body">
            {
              this.props.component
            }
          </div>
          <div className="modal__footer">
            <Button className="modal__btn" text={this.props.btnText} type="primary" icon={arrowRight} clickHandler={this.props.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;