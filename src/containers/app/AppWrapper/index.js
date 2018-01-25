import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

import { namedRoutes } from '../../../routes';

import Header from '../../../components/app/Header';
import Sidebar from '../../../components/app/Sidebar';

import Dashboard from '../../../components/app/Dashboard';
import TransferTokens from '../../../components/app/TokenTransfer';
import Transactions from '../../../components/app/Transactions';
import Settings from '../../../components/app/Settings';

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
              <Route exact path={namedRoutes.tokenTransfer} component={TransferTokens}/>
              <Route exact path={namedRoutes.transactions} component={Transactions}/>
              <Route exact path={namedRoutes.settings} component={Settings}/>
              <Redirect from={namedRoutes.app} to={namedRoutes.dashboard}/>
            </Switch>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default AppWrapper;
