import React from 'react';
import { reduxForm, Field, FormSection } from 'redux-form';
import { Form, FormGroup, Label, Button, Alert } from 'reactstrap';

import { twoFactorCode } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderHiddenInput from '../../forms/RenderHiddenInput';

const VerifyChangePasswordForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<Button color="primary" className="px-4" disabled={true}><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
      : (<Button color="primary" className="px-4" disabled={invalid}>Change</Button>));

  return (
    <Form onSubmit={handleSubmit}>
      <FormSection name="verification">
        <FormGroup>
          <Label>Enter code from email</Label>

          <Field
            component={RenderInput}
            icon={<i className="fa fa-key fa-fw"/>}
            name="code"
            type="text"
            placeholder="PIN code"
            autocomplete="off"
            validate={twoFactorCode}/>
        </FormGroup>

        <Field
          component={RenderHiddenInput}
          name="verificationId"
          disabled/>
      </FormSection>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <FormGroup>
        {renderButton()}
      </FormGroup>
    </Form>
  );
};

const FormComponent = reduxForm({
  form: 'verifyChangePassword',
  initialValues: {
    verification: {
      verificationId: '',
      code: ''
    }
  }
})(VerifyChangePasswordForm);

export default FormComponent;
