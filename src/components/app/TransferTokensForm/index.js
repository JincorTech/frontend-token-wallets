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

import { required, number } from '../../../utils/validators';

import RenderInput from '../../forms/RenderInput';
import RenderSelect from '../../forms/RenderSelect';

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
              validate={required}/>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col xs={8}>
          <FormGroup>
            <Label>Amount</Label>

            <Field
              component={RenderInput}
              icon={<i className="fa fa-money fa-fw"/>}
              name="amount"
              type="text"
              placeholder="Amount"
              validate={number}/>
          </FormGroup>
        </Col>

        <Col xs={4}>
          <FormGroup>
            <Label>Currency</Label>

            <Field
              component={RenderSelect}
              icon={<i className="fa fa-money fa-fw"/>}
              name="type"
              validate={required}
              options={currencies}/>
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

const FormComponent = reduxForm({
  form: 'transferTokens',
  initialValues: {
    to: '',
    amount: '',
    type: '',
    contractAddress: ''
  }
})(TransferTokensForm);

export default FormComponent;
