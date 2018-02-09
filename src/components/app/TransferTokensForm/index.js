import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Button,
  Alert
} from 'reactstrap';

import { required, number, passwordValidate } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderSelect from '../../forms/RenderSelect';
import RenderPasswordInput from '../../forms/RenderPasswordInput';

const TransferTokensForm = (props) => {
  const {
    handleSubmit,
    currencies,
    invalid,
    error,
    fetching
  } = props;

  const renderButton = () =>
    (fetching
      ? (<Button color="primary" className="px-4" disabled={true}><i className="fa fa-cog fa-spin fa-fw"/> Loading</Button>)
      : (<Button color="primary" className="px-4" disabled={invalid}>Initiate transaction</Button>));

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <FormGroup>
            <Label>Recipient address</Label>

            <Field
              component={RenderInput}
              icon={<i className="fa fa-user fa-fw"/>}
              name="to"
              type="text"
              placeholder="Recipient address"
              autoComplete="off"
              validate={required}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <FormGroup>
            <Label>Amount</Label>

            <Field
              component={RenderInput}
              icon={<i className="fa fa-money fa-fw"/>}
              name="amount"
              type="text"
              placeholder="Amount"
              autoComplete="off"
              validate={number}/>
          </FormGroup>
        </Col>

        <Col xs={6}>
          <FormGroup>
            <Label>Currency</Label>

            <Field
              component={RenderSelect}
              icon={<i className="fa fa-money fa-fw"/>}
              name="currency"
              validate={required}
              options={currencies}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <FormGroup>
            <Label>Payment password</Label>

            <Field
              component={RenderPasswordInput}
              icon={<i className="fa fa-user fa-fw"/>}
              name="paymentPassword"
              type="password"
              placeholder="Payment password"
              autoComplete="off"
              validate={passwordValidate}/>
          </FormGroup>
        </Col>
      </Row>

      {error ? <Alert color="danger">{error}</Alert> : null}

      <FormGroup>
        {renderButton()}
      </FormGroup>
    </Form>
  );
};

const validate = (values, props) => {
  const errors = {};

  if (values.to === props.selfAddress) {
    errors.to = 'You can not send tokens to yourself';
  }

  return errors;
};

const FormComponent = reduxForm({
  form: 'transferTokens',
  validate,
  initialValues: {
    to: '',
    amount: '',
    currency: '',
    paymentPassword: ''
  }
})(TransferTokensForm);

export default FormComponent;
