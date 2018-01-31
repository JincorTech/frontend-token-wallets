import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';

import { fetchBalances } from '../../../redux/modules/app/dashboard';
import { changeStep } from '../../../redux/modules/app/transferTokens';

import TokenTransferForm from '../../../components/app/TransferTokensForm';
import VerifyTransferTokenForm from '../../../components/app/VerifyTransferTokensForm';

class TokenTransfer extends Component {
  componentDidMount() {
    const { fetchBalances } = this.props;

    fetchBalances();
  }

  render() {
    const {
      erc20TokensBalance,
      step,
      changeStep
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
              onSubmit={() => {}}
              fetching={false}
              currencies={currencies}/>
          );
        case 'verifyTransferTokens':
          return (
            <VerifyTransferTokenForm
              onSubmit={() => {}}
              fetching={false}
              initialValues={{}}/>
          );
        default:
          return 'Something went wrong';
      }
    };

    return (
      <div className="animated fadeIn mt-4">
        <button onClick={() => changeStep('transferTokens')}>1</button>
        <button onClick={() => changeStep('verifyTransferTokens')}>2</button>
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
    fetchBalances,
    changeStep
  }
)(TokenTransfer);
