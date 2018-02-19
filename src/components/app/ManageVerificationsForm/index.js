import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Form,
  FormGroup,
  Button,
  Alert
} from 'reactstrap';

import RenderCheckbox from '../../forms/RenderCheckbox';

const ManageVerificationsForm = (props) => {
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
        <Field
          component={RenderCheckbox}
          type="checkbox"
          name="user_signin"
          text="Sign in verification"/>
      </FormGroup>

      <FormGroup>
        <Field
          component={RenderCheckbox}
          type="checkbox"
          name="user_change_password"
          text="Change password verification"/>
      </FormGroup>

      <FormGroup>
        <Field
          component={RenderCheckbox}
          type="checkbox"
          name="transaction_send"
          text="Transfer tokens verification"/>
      </FormGroup>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <FormGroup>
        {renderButton()}
      </FormGroup>
    </Form>
  );
};

const FormComponent = reduxForm({
  form: 'manageVerifications',
  initialValues: {
    user_signin: false,
    user_change_password: false,
    transaction_send: false
  },
  enableReinitialize: true
})(ManageVerificationsForm);

export default FormComponent;
