import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import { CSSTransition } from 'react-transition-group';
import './Modal.scss';

let modalRoot = document.getElementById('modal');

//for jest testing add modalroot if not available
if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
}

const Modal = (props) => {
    const { modalRef, isModalOpen, closeOnClick, overlayClass, children, hideModal } = props;
    const el = useRef(document.createElement('div'));

    useEffect(() => {
        const target = el.current;
        modalRoot.appendChild(el.current);
        return () => {
            modalRoot.removeChild(target);
        };
    }, []);

    useEffect(() => {
        if (isModalOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
    }, [isModalOpen]);

    const handleClickOutside = (evt) => {
        evt.stopPropagation();
        if (closeOnClick) {
            if (!modalRef.current.contains(evt.target)) {
                hideModal();
            }
        }
    };

    const handleEscClose = (evt) => {
        evt.stopPropagation();
        if (closeOnClick) {
            if (evt.keyCode === 27) {
                hideModal();
            }
        }
    };

    return createPortal(
        <CSSTransition
            in={isModalOpen}
            timeout={400}
            classNames={overlayClass}
            unmountOnExit
        >
            <FocusTrap>
                <div
                    className={`modal-overlay ${overlayClass}`}
                    onClick={handleClickOutside}
                    onKeyDown={handleEscClose}
                >
                    {children}
                </div>
            </FocusTrap>
        </CSSTransition>
        , el.current
    );
}

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeOnClick: PropTypes.bool,
    children: PropTypes.element.isRequired,
    modalRef: PropTypes.object,
    hideModal: PropTypes.func
};

export default Modal;
