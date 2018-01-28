import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Alert } from 'reactstrap';

import { emailValidate } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';

const RecoveryPasswordForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Recovery password</h1>
      <p className="text-muted">Enter your email and we send instructions</p>

      <Field
        component={RenderInput}
        icon={<i className="icon-user"/>}
        name="email"
        type="email"
        placeholder="E-mail"
        validate={emailValidate}/>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <Button color="success" disabled={invalid} block>Submit</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'recoveryPassword',
  initialValues: {
    email: ''
  }
})(RecoveryPasswordForm);

export default FormComponent;
