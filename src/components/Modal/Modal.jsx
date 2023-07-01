import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalContainer } from './Modal.styled';

export class Modal extends Component {
  handleOverlayClick = evt => {
    if (evt.target !== evt.currentTarget) return;

    this.props.onClose();
  };

  handleEsc = evt => {
    if (evt.code !== 'Escape') return;

    this.props.onClose();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  render() {
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <ModalContainer>
          <img src={this.props.src} alt={this.props.alt} />
        </ModalContainer>
      </Overlay>,
      document.getElementById('modal-root')
    );
  }
}
