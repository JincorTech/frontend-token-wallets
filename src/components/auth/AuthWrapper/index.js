import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Row } from 'reactstrap';

import { namedRoutes } from '../../../routes';

import SignIn from '../../../containers/auth/SignIn';
import SignUp from '../../../containers/auth/SignUp';
import RecoveryPassword from '../../../containers/auth/RecoveryPassword';

const AuthWrapper = () => (
  <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Switch>
          <Route exact path={namedRoutes.signIn} component={SignIn}/>
          <Route exact path={namedRoutes.signUp} component={SignUp}/>
          <Route exact path={namedRoutes.recoveryPassword} component={RecoveryPassword}/>
        </Switch>
      </Row>
    </Container>
  </div>
);

export default AuthWrapper;
