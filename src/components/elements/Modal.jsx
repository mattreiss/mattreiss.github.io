import React from 'react';
import styled from 'styled-components';
import {
  CloseButton,
} from '../styled/Buttons';
// import {
//   Article,
// } from '../styled/Views';

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

const ModalCloseButton = styled(CloseButton)`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
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
        <ModalCloseButton
          onClick={onClickClose}
          color="dark"
          bg="white"
          shadow="medium"
          m="xxl"
          p="large"
          large
        />
        {children}
      </Container>
    )
  }
}

export default Modal;
