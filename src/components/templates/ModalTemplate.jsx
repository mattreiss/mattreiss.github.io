import React from 'react';
import { Modal } from '../molecules';

class ModalTemplate extends React.Component {
  render() {
    let {
      header,
      content,
      children,
      footer
    } = this.props;
    return (
      <Modal {...this.props} >
        {header}
        {content}
        {children}
        {footer}
      </Modal>
    )
  }
}

export default ModalTemplate;
