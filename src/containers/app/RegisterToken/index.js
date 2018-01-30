import React from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap';

import { fetchTokenInfo, registerToken } from '../../../redux/modules/app/registerToken';

import RegisterTokenAddressForm from '../../../components/app/RegisterTokenAddressForm';
import RegisterTokenForm from '../../../components/app/RegisterTokenForm';

const RegisterToken = (props) => {
  const {
    fetching,
    step,
    token
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'registerTokenAddress':
        return (
          <RegisterTokenAddressForm
            onSubmit={fetchTokenInfo}
            fetching={fetching}/>
        );
      case 'registerToken':
        return (
          <RegisterTokenForm
            onSubmit={registerToken}
            fetching={fetching}
            initialValues={token}/>
        );
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Card>
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
  {}
)(RegisterToken);
