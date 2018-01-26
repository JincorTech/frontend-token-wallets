import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Card, CardBody } from 'reactstrap';

import { changeStep } from '../../../redux/modules/auth/recoveryPassword';

import RecoveryPasswordForm from '../../../components/auth/RecoveryPasswordForm';
import VerifyRecoveryPasswordForm from '../../../components/auth/VerifyRecoveryPasswordForm';
import SetNewPasswordForm from '../../../components/auth/SetNewPasswordForm';

const RecoveryPassword = (props) => {
  const {
    step,
    changeStep
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'recoveryPassword':
        return <RecoveryPasswordForm/>;
      case 'verifyRecoveryPassword':
        return <VerifyRecoveryPasswordForm/>;
      case 'setNewPassword':
        return <SetNewPasswordForm/>;
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Col md="6">
      <button onClick={() => changeStep('recoveryPassword')}>recoveryPassword</button>
      <button onClick={() => changeStep('verifyRecoveryPassword')}>verifyRecoveryPassword</button>
      <button onClick={() => changeStep('setNewPassword')}>setNewPassword</button>
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
    changeStep
  },
  null,
  { pure: false }
)(RecoveryPassword);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
