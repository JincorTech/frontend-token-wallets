import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, FormGroup, Label, Button, Alert } from 'reactstrap';

import { passwordValidate } from '../../../utils/validators';

import RenderPasswordInput from '../../forms/RenderPasswordInput';

const ChangePasswordForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<Button color="primary" className="px-4" disabled={true}><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
      : (<Button color="primary" className="px-4" disabled={invalid}>Save</Button>));

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Old password</Label>

        <Field
          component={RenderPasswordInput}
          icon={<i className="fa fa-code fa-fw"/>}
          name="oldPassword"
          type="password"
          placeholder="Old password"
          validate={passwordValidate}/>
      </FormGroup>

      <FormGroup>
        <Label>New password</Label>

        <Field
          component={RenderPasswordInput}
          icon={<i className="fa fa-code fa-fw"/>}
          name="newPassword"
          type="password"
          placeholder="New password"
          validate={passwordValidate}/>
      </FormGroup>

      <Alert color="info">
        Password must be at least 8 characters length, contain at least one number,
        one capital letter, one small letter. Special characters are allowed.
      </Alert>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <FormGroup>
        {renderButton()}
      </FormGroup>
    </Form>
  );
};

const FormComponent = reduxForm({
  form: 'changePassword',
  initialValues: {
    oldPassword: '',
    newPassword: ''
  }
})(ChangePasswordForm);

export default FormComponent;
