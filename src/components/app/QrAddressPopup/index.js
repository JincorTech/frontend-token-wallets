import React from 'react';
import QRious from 'qrious';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

// import { shortAddress } from '../../../utils/blockchain';

const QrAddressPopup = (props) => {
  const {
    open,
    address,
    toggleQrAddressPopup,
    closeQrAddressPopup
  } = props;

  const qr = new QRious({
    size: 300,
    value: address
  });

  return (
    <Modal isOpen={open} toggle={toggleQrAddressPopup}>
      <ModalHeader>Your address</ModalHeader>
      <ModalBody style={{ textAlign: 'center' }}>
        <img className="img-fluid" src={qr.toDataURL()}/>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={closeQrAddressPopup}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default QrAddressPopup;
