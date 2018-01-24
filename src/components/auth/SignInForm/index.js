import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { Row, Col, Button, Input, InputGroup } from 'reactstrap';

import { namedRoutes } from '../../../routes';

const SignInForm = (props) => {
  const {
    handleSubmit
  } = props;

  const renderEmailInput = () => (
    <InputGroup className="mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="icon-user"></i>
        </span>
      </div>
      <Input type="text" placeholder="Username"/>
    </InputGroup>
  );

  const renderPasswordInput = () => (
    <InputGroup className="mb-4">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="icon-lock"></i>
        </span>
      </div>
      <Input type="password" placeholder="Password"/>
    </InputGroup>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <p className="text-muted">Sign In to your account</p>

      <Field
        component={renderEmailInput}
        name="email"
        type="text"
        placeholder="E-mail"/>

      <Field
        component={renderPasswordInput}
        name="password"
        type="password"
        placeholder="Password"/>

        <Row>
          <Col xs="6">
            <Button color="primary" className="px-4">Login</Button>
          </Col>
          <Col xs="6" className="text-right">
            <Link to={namedRoutes.recoveryPassword} color="link" className="btn btn-link px-0">Forgot password?</Link>
          </Col>
        </Row>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'signIn',
  initialValues: {
    email: '',
    password: ''
  }
})(SignInForm);

export default FormComponent;
