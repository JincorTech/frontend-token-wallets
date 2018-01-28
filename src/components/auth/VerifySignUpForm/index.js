import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Alert } from 'reactstrap';

import { twoFactorCode } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderHiddenInput from '../../forms/RenderHiddenInput';

const VerifySignUpForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <p className="text-muted">Verify your email</p>

      <Field
        component={RenderInput}
        icon={<i className="icon-lock"/>}
        name="code"
        type="text"
        placeholder="PIN"
        validate={twoFactorCode}/>

      <Field
        component={RenderHiddenInput}
        name="email"
        type="hidden"
        disabled/>

        <Field
        component={RenderHiddenInput}
        name="verificationId"
        type="hidden"
        disabled/>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <Button color="success" disabled={invalid} block>Submit</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'verifySignUp',
  initialValues: {
    email: '',
    verificationId: '',
    code: ''
  }
})(VerifySignUpForm);

export default FormComponent;
