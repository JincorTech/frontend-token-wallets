import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, FormSection } from 'redux-form';
import { Row, Col, Button, Alert } from 'reactstrap';

import { namedRoutes } from '../../../routes';
import { twoFactorCode } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderHiddenInput from '../../forms/RenderHiddenInput';

const VerifySignInForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<Button color="primary" className="px-4" disabled={true}><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
      : (<Button color="primary" className="px-4" disabled={invalid}>Submit</Button>));

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign In</h1>
      <p className="text-muted">Enter pin from email to verify sign in</p>

      <FormSection name="verification">
        <Field
          component={RenderInput}
          icon={<i className="fa fa-key fa-fw"/>}
          name="code"
          type="text"
          placeholder="PIN"
          validate={twoFactorCode}/>

        <Field
          component={RenderHiddenInput}
          name="verificationId"
          type="hidden"/>
      </FormSection>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <Row>
        <Col xs="6">
          {renderButton()}
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
    verification: {
      verificationId: '',
      code: ''
    }
  }
})(VerifySignInForm);

export default FormComponent;
