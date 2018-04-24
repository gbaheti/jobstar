import React from 'react';

import Button from '../button';

import './styles.css';
import arrowRight from '../../assets/arrow-right.svg';
import cross from '../../assets/cross.svg';

const Modal = (props) => {
  const { heading, onClose, component, btnText, onSubmit } = props;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal__header">
          <h3>{heading}</h3>
          {
            onClose ?
              <button className="modal__close" onClick={onClose}>
                <img src={cross} alt="" />
              </button> 
              : null
          }
        </div>
        <div className="modal__body">
          {
            component
          }
        </div>
        <div className="modal__footer">
          <Button className="modal__btn" text={btnText} type="primary" icon={arrowRight} clickHandler={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Modal;