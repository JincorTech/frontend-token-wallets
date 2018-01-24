import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Input, InputGroup } from 'reactstrap';

const SignUpForm = (props) => {
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
      <h1>Sign Up</h1>
      <p className="text-muted">Create your account</p>

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

      <Button color="success" block>Create Account</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'signUp',
  initialValues: {
    email: '',
    password: ''
  }
})(SignUpForm);

export default FormComponent;
