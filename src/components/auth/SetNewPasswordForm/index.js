import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Alert } from 'reactstrap';

import { passwordValidate } from '../../../utils/validators';

import RenderPasswordInput from '../../forms/RenderPasswordInput';
import RenderHiddenInput from '../../forms/RenderHiddenInput';

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

      <Field
        component={RenderHiddenInput}
        name="email"
        type="hidden"/>

      <Field
        component={RenderHiddenInput}
        name="resetId"
        type="hidden"/>

      <Alert color="info">
        Password can contain lowercase and uppercase letters, numbers and special characters&emsp;
        {// eslint-disable-next-line
        }<code>&#33;&#34;&#35;&#36;&#37;&#38;&#39;&#40;&#41;&#42;&#43;&#58;&#59;&#60;&#61;&#62;&#63;&#64;&#91;&#93;&#94;&#95;&#96;&#123;&#124;&#125;&#126;</code>
      </Alert>

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
    resetId: ''
  }
})(SetNewPasswordForm);

export default FormComponent;
