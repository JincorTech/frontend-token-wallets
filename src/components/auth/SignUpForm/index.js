import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'reactstrap';

import { fullNameValidate, emailValidate, passwordValidate } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderPasswordInput from '../../forms/RenderPasswordInput';

const SignUpForm = (props) => {
  const {
    handleSubmit,
    invalid
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <p className="text-muted">Create your account</p>

      <Field
        component={RenderInput}
        icon={<i className="icon-user"/>}
        name="name"
        type="text"
        placeholder="Your name"
        validate={fullNameValidate}/>

      <Field
        component={RenderInput}
        icon={<i className="icon-user"/>}
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
