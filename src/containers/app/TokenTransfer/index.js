import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader } from 'reactstrap';

import { initTransferTokens, verifyTransferTokens } from '../../../redux/modules/app/transferTokens';

import TokenTransferForm from '../../../components/app/TransferTokensForm';
import VerifyTransferTokenForm from '../../../components/app/VerifyTransferTokensForm';

class TokenTransfer extends Component {
  render() {
    const {
      fetching,
      erc20TokensBalance,
      selfAddress,
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
              currencies={currencies}
              selfAddress={selfAddress}/>
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
      <Card>
        <CardHeader>
          <h4 className="my-0">Make transaction</h4>
        </CardHeader>
        <CardBody>
          {renderStep(step)}
        </CardBody>
      </Card>
    );
  }
}

export default connect(
  (state) => ({
    erc20TokensBalance: state.app.dashboard.erc20TokensBalance,
    selfAddress: state.app.app.user.ethAddress,
    ...state.app.transferTokens
  }),
  {}
)(TokenTransfer);
