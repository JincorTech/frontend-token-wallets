import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';

import { initChangePassword, verifyChangePassword } from '../../../redux/modules/app/changePassword';

import ChangePasswordForm from '../../../components/app/ChangePasswordForm';
import VerifyChangePasswordForm from '../../../components/app/VerifyTransferTokensForm';

const Settings = (props) => {
  const {
    step,
    fetching,
    verification
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'changePassword':
        return (
          <ChangePasswordForm
            onSubmit={initChangePassword}
            fetching={fetching}/>
        );
      case 'verifyChangePassword':
        return (
          <VerifyChangePasswordForm
            onSubmit={verifyChangePassword}
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
            <CardHeader>Change password</CardHeader>
            <CardBody>
              {renderStep(step)}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default connect(
  (state) => ({ ...state.app.changePassword }),
  {}
)(Settings);
