import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Form,
  FormGroup,
  Button,
  Alert
} from 'reactstrap';

import RenderCheckbox from '../../forms/RenderCheckbox';

const ManageEmailNotificationsForm = (props) => {
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
          text="Sign in notification"/>
      </FormGroup>

      <FormGroup>
        <Field
          component={RenderCheckbox}
          type="checkbox"
          name="user_change_password"
          text="Change password notification"/>
      </FormGroup>

      <FormGroup>
        <Field
          component={RenderCheckbox}
          type="checkbox"
          name="user_reset_password"
          text="Reset password notification"/>
      </FormGroup>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <FormGroup>
        {renderButton()}
      </FormGroup>
    </Form>
  );
};

const FormComponent = reduxForm({
  form: 'manageEmailNotifications',
  initialValues: {
    user_signin: false,
    user_change_password: false,
    user_reset_password: false
  },
  enableReinitialize: true
})(ManageEmailNotificationsForm);

export default FormComponent;
