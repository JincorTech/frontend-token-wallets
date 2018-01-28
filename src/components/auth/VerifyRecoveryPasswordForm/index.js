import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'reactstrap';

import { twoFactorCode } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';

const VerifyRecoveryPasswordForm = (props) => {
  const {
    handleSubmit,
    invalid
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Recovery password</h1>
      <p className="text-muted">Enter pin code from email</p>

      <Field
        component={RenderInput}
        icon={<i className="icon-lock"/>}
        name="code"
        type="text"
        placeholder="PIN"
        validate={twoFactorCode}/>

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
