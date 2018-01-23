import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, Button, Input, InputGroup } from 'reactstrap';

import { namedRoutes } from '../../../routes';

const RecoveryPassword = () => (
  <Col md="6">
    <Card className="mx-4">
      <CardBody className="p-4">
        <h1>Recovery password</h1>
        <p className="text-muted">ello my queen</p>
        <InputGroup className="mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="icon-user"></i>
            </span>
          </div>
          <Input type="text" placeholder="E-mail"/>
        </InputGroup>
        <Row>
          <Col xs="6">
            <Button color="primary" className="px-4">Submit</Button>
          </Col>
          <Col xs="6" className="text-right">
            <Link to={namedRoutes.signIn} className="btn btn-link px-0">Sign in</Link>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default RecoveryPassword;
