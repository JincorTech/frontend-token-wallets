import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'reactstrap';

import RenderInput from '../../forms/RenderInput';
import RenderPasswordInput from '../../forms/RenderPasswordInput';

const SignUpForm = (props) => {
  const {
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <p className="text-muted">Create your account</p>

      <Field
        component={RenderInput}
        icon={<i className="icon-user"/>}
        name="name"
        type="text"
        placeholder="Your name"/>

      <Field
        component={RenderInput}
        icon={<i className="icon-user"/>}
        name="email"
        type="text"
        placeholder="E-mail"/>

      <Field
        component={RenderPasswordInput}
        name="password"
        type="password"
        placeholder="Password"/>

      <Button color="success" block>Create Account</Button>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'signUp',
  initialValues: {
    name: '',
    email: '',
    password: ''
  }
})(SignUpForm);

export default FormComponent;
