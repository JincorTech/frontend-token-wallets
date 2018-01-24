import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Input, InputGroup } from 'reactstrap';

const VerifyRecoveryPasswordForm = (props) => {
  const {
    handleSubmit
  } = props;

  const renderPinInput = () => (
    <InputGroup className="mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="icon-lock"></i>
        </span>
      </div>
      <Input type="email" placeholder="PIN"/>
    </InputGroup>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h1>Recovery password</h1>
      <p className="text-muted">Verify that</p>

      <Field
        component={renderPinInput}
        name="pin"
        type="text"
        placeholder="PIN"/>

      <Button color="success" block>Catch this</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'verifyRecoveryPassword',
  initialValues: {
    pin: ''
  }
})(VerifyRecoveryPasswordForm);

export default FormComponent;
