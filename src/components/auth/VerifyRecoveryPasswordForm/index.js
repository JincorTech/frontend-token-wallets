import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Alert } from 'reactstrap';

import { twoFactorCode } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';

const VerifyRecoveryPasswordForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Recovery password</h1>
      <p className="text-muted">Enter pin code from email</p>

      <Field
        component={RenderInput}
        icon={<i className="fa fa-key fa-fw"/>}
        name="code"
        type="text"
        placeholder="PIN"
        validate={twoFactorCode}/>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <Button color="success" disabled={invalid} block>Submit</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'verifyRecoveryPassword',
  initialValues: {
    code: ''
  }
})(VerifyRecoveryPasswordForm);

export default FormComponent;
