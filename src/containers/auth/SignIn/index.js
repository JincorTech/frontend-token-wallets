import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, CardGroup, Card, CardBody } from 'reactstrap';

import { namedRoutes } from '../../../routes';
import { signIn, verifySignIn } from '../../../redux/modules/auth/signIn';

import SignInForm from '../../../components/auth/SignInForm';
import VerifySignInForm from '../../../components/auth/VerifySignInForm';

const SignIn = (props) => {
  const {
    step,
    user
  } = props;

  const {
    accessToken,
    verification: {
      verificationId,
      method
    }
  } = user;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'signIn':
        return (
          <SignInForm
            onSubmit={signIn}/>
        );
      case 'verifySignIn':
        return (
          <VerifySignInForm
            onSubmit={verifySignIn}
            initialValues={{
              accessToken,
              verification: {
                id: verificationId,
                method
              }
            }}/>
        );
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Col md="8">
      <CardGroup>
        <Card className="p-4">
          <CardBody>
            {renderStep(step)}
          </CardBody>
        </Card>
        <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
          <CardBody className="text-center">
            <div>
              <h2>Sign up</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
              </p>
              <Link to={namedRoutes.signUp} color="primary" className="btn btn-primary active mt-3">Sign Up Now!</Link>
            </div>
          </CardBody>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default connect((state) => ({ ...state.auth.signIn }))(SignIn);
