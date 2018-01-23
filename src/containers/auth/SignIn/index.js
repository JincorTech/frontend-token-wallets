import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup } from 'reactstrap';

import { namedRoutes } from '../../../routes';

const AuthWrapper = () => (
  <Col md="8">
    <CardGroup>
      <Card className="p-4">
        <CardBody>
          <h1>Login</h1>
          <p className="text-muted">Sign In to your account</p>
          <InputGroup className="mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="icon-user"></i>
              </span>
            </div>
            <Input type="text" placeholder="Username"/>
          </InputGroup>
          <InputGroup className="mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="icon-lock"></i>
              </span>
            </div>
            <Input type="password" placeholder="Password"/>
          </InputGroup>
          <Row>
            <Col xs="6">
              <Button color="primary" className="px-4">Login</Button>
            </Col>
            <Col xs="6" className="text-right">
              <Link to={namedRoutes.recoveryPassword} color="link" className="btn btn-link px-0">Forgot password?</Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
        <CardBody className="text-center">
          <div>
            <h2>Sign up</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
            </p>
            <Link to={namedRoutes.signUp} color="primary" className="btn btn-primary active mt-3">Sign Up Now!</Link>
          </div>
        </CardBody>
      </Card>
    </CardGroup>
  </Col>
);

export default AuthWrapper;
