import React from 'react';
import { reduxForm, Field, FormSection } from 'redux-form';
import { Button, Alert } from 'reactstrap';

import { twoFactorCode } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderHiddenInput from '../../forms/RenderHiddenInput';

const VerifySignUpForm = (props) => {
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
      <h1>Sign Up</h1>
      <p className="text-muted">Verify your email</p>

      <FormSection name="verification">
        <Field
          component={RenderInput}
          icon={<i className="fa fa-key fa-fw"/>}
          name="code"
          type="text"
          placeholder="PIN code"
          autocomplete="off"
          validate={twoFactorCode}/>

        <Field
          component={RenderHiddenInput}
          name="verificationId"
          type="hidden"
          disabled/>
      </FormSection>

      {error ? <Alert color="danger">{error}</Alert> : null}

      {renderButton()}
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'verifySignUp',
  initialValues: {
    verification: {
      verificationId: '',
      code: ''
    }
  }
})(VerifySignUpForm);

export default FormComponent;
