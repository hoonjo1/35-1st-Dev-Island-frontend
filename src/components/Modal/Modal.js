import React from 'react';
import './Modal.scss';

const Modal = props => {
  const { modalRef, modalOpen, modalClose, header, children, moveItem } = props;

  return (
    <div className={modalOpen ? 'openModal modal' : 'modal'} ref={modalRef}>
      {modalOpen && (
        <section>
          <header>
            {header}
            <button className="close" onClick={modalClose}>
              &times;
            </button>
          </header>
          <main>{children}</main>
          <footer>
            <button className="gotocart" onClick={moveItem}>
              장바구니로 이동
            </button>
          </footer>
        </section>
      )}
    </div>
  );
};

export default Modal;
