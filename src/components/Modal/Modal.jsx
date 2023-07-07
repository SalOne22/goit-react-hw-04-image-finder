import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

export const Modal = ({ src, alt, onClose }) => {
  const handleOverlayClick = evt => {
    if (evt.target !== evt.currentTarget) return;

    onClose();
  };

  useEffect(() => {
    const handleEsc = evt => {
      if (evt.code !== 'Escape') return;

      onClose();
    };

    window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <img src={src} alt={alt} />
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
