import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';

import { fetchBalances } from '../../../redux/modules/app/dashboard';
import { initTransferTokens, verifyTransferTokens } from '../../../redux/modules/app/transferTokens';

import TokenTransferForm from '../../../components/app/TransferTokensForm';
import VerifyTransferTokenForm from '../../../components/app/VerifyTransferTokensForm';

class TokenTransfer extends Component {
  componentDidMount() {
    const { fetchBalances } = this.props;

    fetchBalances();
  }

  render() {
    const {
      fetching,
      erc20TokensBalance,
      step,
      verification
    } = this.props;

    const currencies = erc20TokensBalance.reduce(
      (acc, token) =>
        acc.concat({ value: token.contractAddress, label: token.symbol }),
      [{ value: '', label: 'Select currency' }, { value: 'eth_transfer', label: 'ETH' }]
    );

    const renderStep = (currentStep) => {
      switch (currentStep) {
        case 'transferTokens':
          return (
            <TokenTransferForm
              onSubmit={initTransferTokens}
              fetching={fetching}
              currencies={currencies}/>
          );
        case 'verifyTransferTokens':
          return (
            <VerifyTransferTokenForm
              onSubmit={verifyTransferTokens}
              fetching={fetching}
              initialValues={{
                verification: {
                  verificationId: verification.verificationId
                }
              }}/>
          );
        default:
          return 'Something went wrong';
      }
    };

    return (
      <div className="animated fadeIn mt-4">
        <Row>
          <Col xs="12" lg="5">
            <Card>
              <CardBody>
                {renderStep(step)}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    erc20TokensBalance: state.app.dashboard.erc20TokensBalance,
    ...state.app.transferTokens
  }),
  {
    fetchBalances
  }
)(TokenTransfer);
