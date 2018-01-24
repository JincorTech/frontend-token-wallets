import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, CardFooter } from 'reactstrap';

import { namedRoutes } from '../../../routes';
import { changeStep } from '../../../redux/modules/auth/signUp';

import SignUpForm from '../../../components/auth/SignUpForm';
import VerifySignUpForm from '../../../components/auth/VerifySignUpForm';

const SignUp = (props) => {
  const {
    step,
    changeStep
  } = props;

  const renderStep = (currentStep) => {
    switch (currentStep) {
      case 'signUp':
        return <SignUpForm/>;
      case 'verifySignUp':
        return <VerifySignUpForm/>;
      default:
        return 'Something went wrong';
    }
  };

  return (
    <Col md="6">
      <button onClick={() => changeStep('verifySignUp')}>verifySignUp</button>
      <button onClick={() => changeStep('signUp')}>signUp</button>
      <Card className="mx-4">
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

export default connect(
  (state) => ({ ...state.auth.signUp }),
  {
    changeStep
  }
)(SignUp);
