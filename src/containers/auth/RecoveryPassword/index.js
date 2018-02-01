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
    email,
    fetching,
    verification,
    resetId
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'recoveryPassword':
        return (
          <RecoveryPasswordForm
            onSubmit={recoveryPassword}
            fetching={fetching}/>
        );
      case 'verifyRecoveryPassword':
        return (
          <VerifyRecoveryPasswordForm
            onSubmit={verifyRecoveryPassword}
            fetching={fetching}
            initialValues={{
              email,
              verification: {
                verificationId: verification.verificationId
              }
            }}/>
        );
      case 'setNewPassword':
        return (
          <SetNewPasswordForm
            onSubmit={setNewPassword}
            fetching={fetching}
            initialValues={{
              email,
              resetId
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
