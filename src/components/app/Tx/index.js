import React, { Component } from 'react';
import { format } from 'date-fns';
import { Card, CardBody, CardFooter, Badge } from 'reactstrap';

import { shortAddress } from '../../../utils/blockchain';

const defaultProps = {
  id: '',
  transactionHash: '',
  timestamp: '',
  blockNumber: '',
  from: '',
  to: '',
  amount: 0,
  status: '',
  type: '',
  direction: '',
  token: {
    contractAddress: '',
    symbol: '',
    name: '',
    decimals: ''
  }
};

class Tx extends Component {
  render() {
    const {
      openTxPopup,
      tx
    } = this.props;

    const {
      timestamp,
      direction,
      status,
      amount,
      type,
      token,
    } = tx;

    const renderStatus = () => {
      if (status === 'pending') {
        return (<Badge color="info" className="pull-right text-white"><i className="fa fa-cog fa-spin fa-fw"/> Pending</Badge>);
      }

      if (status === 'failed') {
        return (<Badge color="danger" className="pull-right text-white"><i className="fa fa-times fa-fw"/> Failure</Badge>);
      }

      if (status === 'confirmed') {
        return (<Badge color="success" className="pull-right text-white"><i className="fa fa-check fa-fw"/> Success</Badge>);
      }

      return null;
    };

    const renderHeader = () => {
      const dir = (inner) => {
        if (direction === 'in') {
          return (<span><span className="text-success">Income</span> {inner}</span>);
        }

        return (<span><span className="text-danger">Withdraw</span> {inner}</span>);
      };

      if (type === 'eth_transfer') {
        return dir(<span>{amount} ETH</span>);
      }

      if (token.symbol) {
        return dir(<span>{amount} {token.symbol}</span>);
      }

      return dir(<span>{amount} <a href={'https://etherscan.io'}>{shortAddress(token.contractAddress)}</a></span>);
    };

    const renderTs = () => format(new Date(timestamp * 1000), 'HH:mm | DD MMMM YYYY');

    return (
      <Card>
        <CardBody className="clearfix p-3">
          <div className="h5">{renderStatus()} {renderHeader()}</div>
          <div className="text-muted text-uppercase font-weight-bold font-xs">{renderTs()}</div>
        </CardBody>
        <CardFooter className="px-3 py-2">
          <a className="font-weight-bold font-xs btn-block text-muted" style={{ cursor: 'pointer' }} onClick={() => openTxPopup(tx)}>
            View details
            <i className="fa fa-angle-right float-right font-lg"></i>
          </a>
        </CardFooter>
      </Card>
    );
  }
}

Tx.defaultProps = defaultProps;

export default Tx;
