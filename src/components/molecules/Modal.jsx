import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../molecules';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  text-align: center;
  background-color: rgba(0,0,0,0.2);
`;

const ModalClose = styled(IconButton).attrs(props => ({
  name: 'Close',
}))`
  border-radius: 50%;
  position: fixed;
  top: ${p => p.theme.space.medium}px;
  left: ${p => p.theme.space.medium}px;
`;

class Modal extends React.Component {
  render() {
    let {
      children,
      onClickClose,
      className,
      hidden
    } = this.props;
    return (
      <Container
        className={className}
        hidden={hidden}
        onClick={onClickClose}>
        {children}
      </Container>
    )
  }
}

export default Modal;
