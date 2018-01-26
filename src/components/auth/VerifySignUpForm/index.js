import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'reactstrap';

import RenderPinInput from '../../forms/RenderPinInput';
import RenderHiddenInput from '../../forms/RenderHiddenInput';

const VerifySignUpForm = (props) => {
  const {
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <p className="text-muted">Verify your email</p>

      <Field
        component={RenderPinInput}
        name="code"
        type="text"
        placeholder="PIN"/>

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

      <Button color="success" block>Submit</Button>
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
