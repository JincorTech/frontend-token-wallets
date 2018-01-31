import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, FormGroup, FormText, Label, Button, Alert } from 'reactstrap';

import { required } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';

const RegisterTokenAddressForm = (props) => {
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
        <Label>Enter contract address</Label>

        <Field
          component={RenderInput}
          icon={<i className="fa fa-code fa-fw"/>}
          name="contractAddress"
          type="text"
          placeholder="Contract address"
          validate={required}/>

        <FormText>Address should be like '0x2da22Bea3C346038626Bb1775C8f1e7d98d20607'</FormText>
      </FormGroup>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <FormGroup>
        {renderButton()}
      </FormGroup>
    </Form>
  );
};

const FormComponent = reduxForm({
  form: 'registerTokenAddress',
  initialValues: {
    contractAddress: ''
  }
})(RegisterTokenAddressForm);

export default FormComponent;
