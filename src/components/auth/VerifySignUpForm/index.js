import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Input, InputGroup } from 'reactstrap';

const VerifySignUpForm = (props) => {
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
      <Input type="text" placeholder="PIN"/>
    </InputGroup>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <p className="text-muted">Verify your email</p>

      <Field
        component={renderPinInput}
        name="email"
        type="text"
        placeholder="PIN"/>

      <Button color="success" block>Submit</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'verifySignUp',
  initialValues: {
    pin: ''
  }
})(VerifySignUpForm);

export default FormComponent;
