import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';

import { initChangePassword, verifyChangePassword } from '../../../redux/modules/app/changePassword';
import { setNotifications } from '../../../redux/modules/app/manageEmailNotifications';
import { setVerifications, verifySetVerifications } from '../../../redux/modules/app/manageVerifications';
import { fetchUser } from '../../../redux/modules/app/app';

import ChangePasswordForm from '../../../components/app/ChangePasswordForm';
import VerifyChangePasswordForm from '../../../components/app/VerifyTransferTokensForm';
import ManageEmailNotificationsForm from '../../../components/app/ManageEmailNotificationsForm';
import ManageVerificationsForm from '../../../components/app/ManageVerificationsForm';
import VerifySetVerificationsForm from '../../../components/app/VerifySetVerificationsForm';

class Settings extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const {
      changePasswordStep,
      changePasswordFetching,
      changePasswordVerification,
      manageEmailNotificationsFetching,
      notifications,
      setVerificationsStep,
      manageVerificationsFetching,
      verifications,
      setVerificationsVerification
    } = this.props;

    const renderChangePassword = (currentStep) => {
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

    const renderSetVerifications = (currentStep) => {
      switch (currentStep) {
        case 'manageNotifications':
          return (
            <ManageVerificationsForm
              onSubmit={setVerifications}
              fetching={manageVerificationsFetching}
              initialValues={{ ...verifications }}/>
          );
        case 'verifyManageNotifications':
          return (
            <VerifySetVerificationsForm
              onSubmit={verifySetVerifications}
              fetching={manageVerificationsFetching}
              initialValues={{
                verification: {
                  verificationId: setVerificationsVerification.verificationId
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
                {renderChangePassword(changePasswordStep)}
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
          <Col xs="12" lg="4">
            <Card>
              <CardHeader>Manage e-mail verifications</CardHeader>
              <CardBody>
                {renderSetVerifications(setVerificationsStep)}
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
    changePasswordFetching: state.app.changePassword.fetching,
    changePasswordStep: state.app.changePassword.step,
    changePasswordVerification: state.app.changePassword.verification,

    notifications: state.app.app.user.preferences.notifications,
    manageEmailNotificationsFetching: state.app.manageEmailNotifications.fetching,

    verifications: state.app.app.user.preferences.verifications,
    manageVerificationsFetching: state.app.manageVerifications.fetching,
    setVerificationsStep: state.app.manageVerifications.step,
    setVerificationsVerification: state.app.manageVerifications.verification
  }),
  {
    fetchUser
  }
)(Settings);
