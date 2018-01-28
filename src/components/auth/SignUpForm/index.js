import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Alert } from 'reactstrap';

import { fullNameValidate, emailValidate, passwordValidate } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderPasswordInput from '../../forms/RenderPasswordInput';

const SignUpForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <p className="text-muted">Create your account</p>

      <Field
        component={RenderInput}
        icon={<i className="fa fa-user fa-fw"/>}
        name="name"
        type="text"
        placeholder="Your name"
        validate={fullNameValidate}/>

      <Field
        component={RenderInput}
        icon={<i className="fa fa-envelope fa-fw"/>}
        name="email"
        type="email"
        placeholder="E-mail"
        validate={emailValidate}/>

      <Field
        component={RenderPasswordInput}
        name="password"
        type="password"
        placeholder="Password"
        validate={passwordValidate}/>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <Button color="success" disabled={invalid} block>Create Account</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'signUp',
  initialValues: {
    name: '',
    email: '',
    password: ''
  }
})(SignUpForm);

export default FormComponent;
