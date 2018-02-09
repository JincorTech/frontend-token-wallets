import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';

import { initChangePassword, verifyChangePassword } from '../../../redux/modules/app/changePassword';
import { setNotifications } from '../../../redux/modules/app/manageEmailNotifications';

import ChangePasswordForm from '../../../components/app/ChangePasswordForm';
import VerifyChangePasswordForm from '../../../components/app/VerifyTransferTokensForm';
import ManageEmailNotificationsForm from '../../../components/app/ManageEmailNotificationsForm';

const Settings = (props) => {
  const {
    changePasswordStep,
    changePasswordFetching,
    changePasswordVerification,
    manageEmailNotificationsFetching,
    notifications
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'changePassword':
        return (
          <ChangePasswordForm
            onSubmit={initChangePassword}
            fetching={changePasswordFetching}/>
        );
      case 'verifyChangePassword':
        return (
          <VerifyChangePasswordForm
            onSubmit={verifyChangePassword}
            fetching={changePasswordFetching}
            initialValues={{
              verification: {
                verificationId: changePasswordVerification.verificationId
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
        <Col xs="12" lg="4">
          <Card>
            <CardHeader>Change password</CardHeader>
            <CardBody>
              {renderStep(changePasswordStep)}
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="4">
          <Card>
            <CardHeader>Manage e-mail notifications</CardHeader>
            <CardBody>
              <ManageEmailNotificationsForm
                onSubmit={setNotifications}
                fetching={manageEmailNotificationsFetching}
                initialValues={{ ...notifications }}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default connect(
  (state) => ({
    changePasswordFetching: state.app.changePassword.fetching,
    changePasswordStep: state.app.changePassword.step,
    changePasswordVerification: state.app.changePassword.verification,
    manageEmailNotificationsFetching: state.app.manageEmailNotifications.fetching,
    notifications: state.app.app.user.preferences.notifications
  }),
  {}
)(Settings);
