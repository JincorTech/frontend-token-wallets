import React, { Component } from 'react';
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
  direction: '', // in or out
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
      className,
      cssModule,
      header,
      mainText,
      icon,
      color,
      footer,
      link,
      children,
      variant,

      direction,
      status,
      amount,
      type,
      token,
      ...attributes
    } = this.props;

    const renderStatus = () => {
      if (status === 'pending') {
        return (<Badge color="info" className="pull-right text-white"><i className="fa fa-cog fa-spin fa-fw"/> Pending</Badge>);
      }

      if (status === 'failure') {
        return (<Badge color="danger" className="pull-right text-white"><i className="fa fa-times fa-fw"/> Failure</Badge>);
      }

      if (status === 'success') {
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

    const renderTs = () => '12 Feb 2016';

    return (
      <Card>
        <CardBody className="clearfix p-3" {...attributes}>
          <div className="h5">{renderStatus()} {renderHeader()}</div>
          <div className="text-muted text-uppercase font-weight-bold font-xs">{renderTs()}</div>
        </CardBody>
        <CardFooter className="px-3 py-2">
          <a className="font-weight-bold font-xs btn-block text-muted" href={link}>
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
