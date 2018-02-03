import React from 'react';
import { format } from 'date-fns';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { shortAddress } from '../../../utils/blockchain';

const TxPopup = (props) => {
  const {
    open,
    toggleTxPopup,
    closeTxPopup,
    tx
  } = props;

  const {
    transactionHash,
    contractAddress,
    timestamp,
    blockNumber,
    from,
    to,
    amount,
    token,
    status,
    type
  } = tx;

  const renderStatus = () => {
    if (status === 'pending') {
      return (
        <li>
          <i className="fa fa-fw fa-cog bg-info"/>
          <div className="desc">
            <div className="title">Status</div>
            <small>Pending</small>
          </div>
        </li>
      );
    }

    if (status === 'failed') {
      return (
        <li>
          <i className="fa fa-fw fa-times bg-danger"/>
          <div className="desc">
            <div className="title">Status</div>
            <small>Failure</small>
          </div>
        </li>
      );
    }

    if (status === 'confirmed') {
      return (
        <li>
          <i className="fa fa-fw fa-check bg-success"/>
          <div className="desc">
            <div className="title">Status</div>
            <small>Success</small>
          </div>
        </li>
      );
    }

    return null;
  };

  const renderAmount = () => {
    if (type === 'eth_transfer') {
      return (
        <li>
          <i className="fa fa-fw fa-money bg-primary"/>
          <div className="desc">
            <div className="title">Amount</div>
            <small>{amount} ETH</small>
          </div>
        </li>
      );
    }

    if (token && token.symbol) {
      return (
        <li>
          <i className="fa fa-fw fa-money bg-primary"/>
          <div className="desc">
            <div className="title">Amount</div>
            <small>{amount} {token.symbol}</small>
          </div>
        </li>
      );
    }

    if (contractAddress) {
      return (
        <li>
          <i className="fa fa-fw fa-money bg-primary"/>
          <div className="desc">
            <div className="title">Amount</div>
            <small>{amount} <a href={'https://etherscan.io'}>{shortAddress(contractAddress)}</a></small>
          </div>
        </li>
      );
    }

    return null;
  };

  const renderContractAddress = () => {
    if (contractAddress) {
      return (
        <li>
          <i className="fa fa-fw fa-file-text-o bg-primary"/>
          <div className="desc">
            <div className="title">Contract address</div>
            <small>
              <a
                href={`https://etherscan.io/address/${contractAddress}`}
                target="_blank">
                {contractAddress}
              </a>
            </small>
          </div>
        </li>
      );
    }

    return null;
  };

  return (
    <Modal isOpen={open} toggle={toggleTxPopup}>
      <ModalHeader>Transaction {shortAddress(transactionHash)} details</ModalHeader>
      <ModalBody>
        <ul className="icons-list">
          {renderStatus()}
          <li>
            <i className="fa fa-fw fa-clock-o bg-primary"/>
            <div className="desc">
              <div className="title">Date and time</div>
              <small>{format(new Date(timestamp * 1000), 'HH:mm | DD MMMM YYYY')}</small>
            </div>
          </li>
          <li>
            <i className="fa fa-fw fa-th bg-primary"/>
            <div className="desc">
              <div className="title">Block number</div>
              <small><a href={`https://etherscan.io/block/${blockNumber}`} target="_blank">{blockNumber}</a></small>
            </div>
          </li>
          <li>
            <i className="fa fa-fw fa-hashtag bg-primary"/>
            <div className="desc">
              <div className="title">TxHash</div>
              <small><a href={`https://etherscan.io/tx/${transactionHash}`} target="_blank">{transactionHash}</a></small>
            </div>
          </li>
          {renderContractAddress()}
          <li>
            <i className="fa fa-fw fa-angle-left bg-primary"/>
            <div className="desc">
              <div className="title">From</div>
              <small><a href={`https://etherscan.io/address/${from}`} target="_blank">{from}</a></small>
            </div>
          </li>
          <li>
            <i className="fa fa-fw fa-angle-right bg-primary"/>
            <div className="desc">
              <div className="title">To</div>
              <small><a href={`https://etherscan.io/address/${to}`} target="_blank">{to}</a></small>
            </div>
          </li>
          {renderAmount()}
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={closeTxPopup}>OK</Button>
      </ModalFooter>
    </Modal>
  );
};

export default TxPopup;
