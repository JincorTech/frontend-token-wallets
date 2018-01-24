import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Input, InputGroup } from 'reactstrap';

const RecoveryPasswordForm = (props) => {
  const {
    handleSubmit
  } = props;

  const renderEmailInput = () => (
    <InputGroup className="mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="icon-user"></i>
        </span>
      </div>
      <Input type="email" placeholder="E-mail"/>
    </InputGroup>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h1>Recovery password</h1>
      <p className="text-muted">ello my queen</p>

      <Field
        component={renderEmailInput}
        name="email"
        type="text"
        placeholder="E-mail"/>

      <Button color="success" block>Yo, mailin me pls</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'recoveryPassword',
  initialValues: {
    email: ''
  }
})(RecoveryPasswordForm);

export default FormComponent;
