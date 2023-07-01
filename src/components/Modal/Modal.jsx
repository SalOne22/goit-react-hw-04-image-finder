import { Component } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

export class Modal extends Component {
  handleOverlayClick = evt => {
    if (evt.target !== evt.currentTarget) return;

    this.props.onClose();
  };

  handleEsc = evt => {
    if (evt.keyCode !== 'Escape') return;

    this.props.onClose();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener(this.handleEsc);
  }

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalContainer>
          <img src={this.props.src} alt={this.props.alt} />
        </ModalContainer>
      </Overlay>
    );
  }
}
