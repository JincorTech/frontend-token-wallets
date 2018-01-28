import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Card, CardBody } from 'reactstrap';

import { recoveryPassword, verifyRecoveryPassword, setNewPassword } from '../../../redux/modules/auth/recoveryPassword';

import RecoveryPasswordForm from '../../../components/auth/RecoveryPasswordForm';
import VerifyRecoveryPasswordForm from '../../../components/auth/VerifyRecoveryPasswordForm';
import SetNewPasswordForm from '../../../components/auth/SetNewPasswordForm';

const RecoveryPassword = (props) => {
  const {
    step,
    code,
    email,
    verification: {
      verificationId,
      method
    }
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'recoveryPassword':
        return (
          <RecoveryPasswordForm
            onSubmit={recoveryPassword}/>
        );
      case 'verifyRecoveryPassword':
        return (
          <VerifyRecoveryPasswordForm
            onSubmit={verifyRecoveryPassword}/>
        );
      case 'setNewPassword':
        return (
          <SetNewPasswordForm
            onSubmit={setNewPassword}
            initialValues={{
              email,
              verification: {
                verificationId,
                method,
                code
              }
            }}/>
        );
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Col md="6">
      <Card className="mx-4">
        <CardBody className="p-4">
          {renderStep(step)}
        </CardBody>
      </Card>
    </Col>
  );
};

const ConnectedComponent = connect(
  (state) => ({ ...state.auth.recoveryPassword }),
  {

  }
)(RecoveryPassword);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
