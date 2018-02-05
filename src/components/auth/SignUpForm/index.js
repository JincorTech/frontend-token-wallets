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
    error,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<Button color="success" disabled={true} block><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
      : (<Button color="success" disabled={invalid} block>Create Account</Button>));

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

      <Field
        component={RenderPasswordInput}
        name="paymentPassword"
        type="password"
        placeholder="Payment password"
        validate={passwordValidate}/>

      <Alert color="info">
        Passwords must be different and can contain
        lowercase and uppercase letters, numbers and special characters&emsp;
        {// eslint-disable-next-line
        }<code>&#33;&#34;&#35;&#36;&#37;&#38;&#39;&#40;&#41;&#42;&#43;&#58;&#59;&#60;&#61;&#62;&#63;&#64;&#91;&#93;&#94;&#95;&#96;&#123;&#124;&#125;&#126;</code>
      </Alert>

      {error ? <Alert color="danger">{error}</Alert> : null}

      {renderButton()}
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'signUp',
  initialValues: {
    name: '',
    email: '',
    password: '',
    paymentPassword: ''
  }
})(SignUpForm);

export default FormComponent;
