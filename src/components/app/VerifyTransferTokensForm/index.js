import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, FormGroup, Label, Button, Alert } from 'reactstrap';

import { twoFactorCode } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderHiddenInput from '../../forms/RenderHiddenInput';

const VerifyTransferTokenForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<Button color="primary" className="px-4" disabled={true}><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
      : (<Button color="primary" className="px-4" disabled={invalid}>Verify transaction</Button>));

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Enter code from email</Label>

        <Field
          component={RenderInput}
          icon={<i className="fa fa-key fa-fw"/>}
          name="code"
          type="text"
          placeholder="Contract address"
          validate={twoFactorCode}/>
      </FormGroup>

      <Field
        component={RenderHiddenInput}
        name="verificationId"
        disabled/>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <FormGroup>
        {renderButton()}
      </FormGroup>
    </Form>
  );
};

const FormComponent = reduxForm({
  form: 'verifyTransferToken',
  initialValues: {
    verificationId: '',
    code: ''
  }
})(VerifyTransferTokenForm);

export default FormComponent;
