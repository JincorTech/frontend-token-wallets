import React from 'react';
import { reduxForm, Field, FormSection } from 'redux-form';
import { Button, Alert } from 'reactstrap';

import { twoFactorCode } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderHiddenInput from '../../forms/RenderHiddenInput';

const VerifyRecoveryPasswordForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<Button color="success" disabled={true} block><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
      : (<Button color="success" disabled={invalid} block>Submit</Button>));

  return (
    <form onSubmit={handleSubmit}>
      <h1>Recovery password</h1>
      <p className="text-muted">Enter pin code from email</p>

      <FormSection name="verification">
        <Field
          component={RenderInput}
          icon={<i className="fa fa-key fa-fw"/>}
          name="code"
          type="text"
          placeholder="PIN code"
          autoComplete="off"
          validate={twoFactorCode}/>

        <Field
          component={RenderHiddenInput}
          name="verificationId"
          type="hidden"/>
      </FormSection>

      <Field
        component={RenderHiddenInput}
        name="email"
        type="hidden"/>

      {error ? <Alert color="danger">{error}</Alert> : null}

      {renderButton()}
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'verifyRecoveryPassword',
  initialValues: {
    email: '',
    verification: {
      verificationId: '',
      code: ''
    }
  }
})(VerifyRecoveryPasswordForm);

export default FormComponent;
