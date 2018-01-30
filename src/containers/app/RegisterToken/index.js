import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap';

import { changeStep } from '../../../redux/modules/app/registerToken';

import RegisterTokenAddressForm from '../../../components/app/RegisterTokenAddressForm';
import RegisterTokenForm from '../../../components/app/RegisterTokenForm';

const RegisterToken = (props) => {
  const {
    step,
    changeStep
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'registerTokenAddress':
        return (
          <RegisterTokenAddressForm
            onSubmit={null}
            fetching={false}/>
        );
      case 'registerToken':
        return (
          <RegisterTokenForm
            onSubmit={null}
            fetching={false}
            initialValues={{
              contractAddress: 'contractAddress init val',
              name: 'name init val',
              symbol: 'symbol init val',
              decimals: 18
            }}/>
        );
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Card>
      <button onClick={() => changeStep('registerTokenAddress')}>1</button>
      <button onClick={() => changeStep('registerToken')}>2</button>
      <CardHeader>
        <h4 className="my-0">Add token</h4>
      </CardHeader>
      <CardBody>
        {renderStep(step)}
      </CardBody>
    </Card>
  );
};

export default connect(
  (state) => ({ ...state.app.registerToken }),
  {
    changeStep
  }
)(RegisterToken);
