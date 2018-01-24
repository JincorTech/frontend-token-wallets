import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Input, InputGroup } from 'reactstrap';

const SetNewPasswordForm = (props) => {
  const {
    handleSubmit
  } = props;

  const renderPasswordInput = () => (
    <InputGroup className="mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="icon-user"></i>
        </span>
      </div>
      <Input type="password" placeholder="New password"/>
    </InputGroup>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h1>Recovery password</h1>
      <p className="text-muted">ello my queen</p>

      <Field
        component={renderPasswordInput}
        name="password"
        type="password"
        placeholder="New password"/>

      <Button color="success" block>Change password</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'setNewPassword',
  initialValues: {
    password: ''
  }
})(SetNewPasswordForm);

export default FormComponent;
