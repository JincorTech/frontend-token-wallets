import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardBody, CardFooter, Button, Input, InputGroup } from 'reactstrap';

import { namedRoutes } from '../../../routes';

const SignUp = () => (
  <Col md="6">
    <Card className="mx-4">
      <CardBody className="p-4">
        <h1>Sign Up</h1>
        <p className="text-muted">Create your account</p>
        <InputGroup className="mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="icon-user"></i>
            </span>
          </div>
          <Input type="text" placeholder="Username"/>
        </InputGroup>
        <InputGroup className="mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">@</span>
          </div>
          <Input type="text" placeholder="Email"/>
        </InputGroup>
        <InputGroup className="mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="icon-lock"></i>
            </span>
          </div>
          <Input type="password" placeholder="Password"/>
        </InputGroup>
        <Button color="success" block>Create Account</Button>
      </CardBody>
      <CardFooter className="p-4">
        <Row>
          <Col xs="12 text-center">
            Already have account?&nbsp;
            <Link className="btn btn-link px-0" to={namedRoutes.signIn}>Sign In</Link>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  </Col>
);

export default SignUp;
