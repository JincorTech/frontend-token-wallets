import React from 'react';
import { Container, Row } from 'reactstrap';

const AuthWrapper = (props) => (
  <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        {props.children}
      </Row>
    </Container>
  </div>
);

export default AuthWrapper;
