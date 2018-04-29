import React from "react";
import { CSSTransition } from "react-transition-group";

import Button from "../button";

import "./styles.css";
import arrowRight from "../../assets/arrow-right.svg";
import cross from "../../assets/cross.svg";

const Modal = props => {
  const { heading, onClose, component, btnText, onSubmit, isOpen } = props;

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="tr-modal-overlay"
      mountOnEnter
      unmountOnExit>
      <div className="modal-overlay">
        <CSSTransition
          in={isOpen}
          timeout={300}
          appear={true}
          classNames="tr-modal">
          <div className="modal">
            <div className="modal__header">
              <h3>{heading}</h3>
              {onClose ? (
                <button className="modal__close" onClick={onClose}>
                  <img src={cross} alt="" />
                </button>
              ) : null}
            </div>
            <div className="modal__body">{component}</div>
            <div className="modal__footer">
              <Button
                className="modal__btn"
                text={btnText}
                type="primary"
                icon={arrowRight}
                clickHandler={onSubmit}
              />
            </div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Modal;
