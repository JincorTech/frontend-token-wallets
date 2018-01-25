import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import { namedRoutes } from '../../../routes';

import Header from '../../../components/app/Header';
import Sidebar from '../../../components/app/Sidebar';
import Dashboard from '../../../components/app/Dashboard';

const AppWrapper = (props) => {
  console.log(props);

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar {...props}/>
        <main className="main">
          <Container fluid>
            <Switch>
              <Route exact path={namedRoutes.dashboard} component={Dashboard}/>
            </Switch>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default AppWrapper;
