import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Card, CardBody, CardFooter } from 'reactstrap';

import { namedRoutes } from '../../../routes';
import { signUp, verifySignUp } from '../../../redux/modules/auth/signUp';

import SignUpForm from '../../../components/auth/SignUpForm';
import VerifySignUpForm from '../../../components/auth/VerifySignUpForm';

const SignUp = (props) => {
  const {
    step,
    user,
    fetching
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'signUp':
        return (
          <SignUpForm
            onSubmit={signUp}
            fetching={fetching}/>
        );
      case 'verifySignUp':
        return (
          <VerifySignUpForm
            onSubmit={verifySignUp}
            fetching={fetching}
            initialValues={{
              verification: {
                verificationId: user.verification.verificationId
              }
            }}/>
        );
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Col md="6">
      <Card className="mx-lg-4 mx-md-0">
        <CardBody className="p-4">
          {renderStep(step)}
        </CardBody>
        <CardFooter className="p-4">
          <Row>
            <Col xs="12 text-center">
              Already have account?&nbsp;
              <Link className="btn btn-link px-0" to={namedRoutes.signIn}>Sign In</Link>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </Col>
  );
};

const ConnectedComponent = connect((state) =>
  ({ ...state.auth.signUp }))(SignUp);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
