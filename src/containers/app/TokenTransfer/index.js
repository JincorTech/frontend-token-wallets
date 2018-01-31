import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';

import { fetchBalances } from '../../../redux/modules/app/dashboard';

import TokenTransferForm from '../../../components/app/TransferTokensForm';

class TokenTransfer extends Component {
  componentDidMount() {
    const { fetchBalances } = this.props;

    fetchBalances();
  }

  render() {
    const {
      erc20TokensBalance
    } = this.props;

    const currencies = erc20TokensBalance.reduce(
      (acc, token) =>
        acc.concat({ value: token.contractAddress, label: token.symbol }),
      [{ value: '', label: 'Select currency' }, { value: 'eth_transfer', label: 'ETH' }]
    );

    return (
      <div className="animated fadeIn mt-4">
        <Row>
          <Col xs="12" lg="5">
            <Card>
              <CardBody>
                <TokenTransferForm
                  currencies={currencies}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state) => ({ ...state.app.dashboard }),
  {
    fetchBalances
  }
)(TokenTransfer);
