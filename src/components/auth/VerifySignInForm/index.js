import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, FormSection } from 'redux-form';
import { Row, Col, Button } from 'reactstrap';

import { namedRoutes } from '../../../routes';

import RenderPinInput from '../../forms/RenderPinInput';
import RenderHiddenInput from '../../forms/RenderHiddenInput';

const VerifySignInForm = (props) => {
  const {
    handleSubmit
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <p className="text-muted">Sign In to your account</p>

      <FormSection name="verification">
        <Field
          component={RenderPinInput}
          name="code"
          type="text"
          placeholder="PIN"/>

        <Field
          component={RenderHiddenInput}
          name="id"
          type="hidden"/>

        <Field
          component={RenderHiddenInput}
          name="method"
          type="hidden"/>
      </FormSection>

      <Field
        component={RenderHiddenInput}
        name="accessToken"
        type="hidden"/>

      <Row>
        <Col xs="6">
          <Button color="primary" className="px-4">Submit</Button>
        </Col>
        <Col xs="6" className="text-right">
          <Link to={namedRoutes.recoveryPassword} color="link" className="btn btn-link px-0">Forgot password?</Link>
        </Col>
      </Row>
    </form>
  );
};

const FormComponent = reduxForm({
  form: 'verifySignIn',
  initialValues: {
    accessToken: '',
    verification: {
      id: '',
      code: '',
      method: ''
    }
  }
})(VerifySignInForm);

export default FormComponent;
