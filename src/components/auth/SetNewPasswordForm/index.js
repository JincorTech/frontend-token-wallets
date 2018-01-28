import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Alert } from 'reactstrap';

import { passwordValidate } from '../../../utils/validators';

import RenderPasswordInput from '../../forms/RenderPasswordInput';

const SetNewPasswordForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<Button color="success" disabled={true} block><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
      : (<Button color="success" disabled={invalid} block>Change password</Button>));

  return (
    <form onSubmit={handleSubmit}>
      <h1>Recovery password</h1>
      <p className="text-muted">Enter new password</p>

      <Field
        component={RenderPasswordInput}
        name="password"
        type="password"
        placeholder="New password"
        validate={passwordValidate}/>

      {error ? <Alert color="danger">{error}</Alert> : null}

      {renderButton()}
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'setNewPassword',
  initialValues: {
    email: '',
    password: '',
    verification: {
      method: '',
      verificationId: '',
      code: ''
    }
  }
})(SetNewPasswordForm);

export default FormComponent;
