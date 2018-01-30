import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, FormGroup, Label, Button, Alert } from 'reactstrap';

import { required, number } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';

const RegisterTokenForm = (props) => {
  const {
    handleSubmit,
    invalid,
    error,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<Button color="primary" className="px-4" disabled={true}><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
      : (<Button color="primary" className="px-4" disabled={invalid}>Add</Button>));

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Contract address</Label>

        <Field
          component={RenderInput}
          icon={<i className="fa fa-code fa-fw"/>}
          name="contractAddress"
          type="text"
          disabled/>
      </FormGroup>

      <FormGroup>
        <Label>Name (optional)</Label>

        <Field
          component={RenderInput}
          icon={<i className="fa fa-code fa-fw"/>}
          name="name"
          type="text"
          placeholder="Name"/>
      </FormGroup>

      <FormGroup>
        <Label>Symbol</Label>

        <Field
          component={RenderInput}
          icon={<i className="fa fa-code fa-fw"/>}
          name="symbol"
          type="text"
          placeholder="Symbol"
          validate={required}/>
      </FormGroup>

      <FormGroup>
        <Label>Decimals</Label>

        <Field
          component={RenderInput}
          icon={<i className="fa fa-code fa-fw"/>}
          name="decimals"
          type="text"
          placeholder="Decimals"
          validate={number}/>
      </FormGroup>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <FormGroup>
        {renderButton()}
      </FormGroup>
    </Form>
  );
};

const FormComponent = reduxForm({
  form: 'registerToken',
  initialValues: {
    contractAddress: '',
    name: '',
    symbol: '',
    decimals: ''
  }
})(RegisterTokenForm);

export default FormComponent;
