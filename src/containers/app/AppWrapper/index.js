import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

import { namedRoutes } from '../../../routes';
import { logout, fetchUser } from '../../../redux/modules/app/app';
import { openQrAddressPopup, toggleQrAddressPopup, closeQrAddressPopup } from '../../../redux/modules/app/qrAddressPopup';

import Header from '../../../components/app/Header';
import Sidebar from '../../../components/app/Sidebar';

import Dashboard from '../Dashboard';
import Settings from '../Settings';
import QrAddressPopup from '../../../components/app/QrAddressPopup';

class AppWrapper extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;

    fetchUser();
  }

  render() {
    const {
      toggleQrAddressPopup,
      closeQrAddressPopup
    } = this.props;

    return (
      <div className="app">
        <Header {...this.props}/>
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Container fluid>
              <Switch>
                <Route exact path={namedRoutes.dashboard} component={Dashboard}/>
                <Route exact path={namedRoutes.settings} component={Settings}/>
                <Redirect from={namedRoutes.app} to={namedRoutes.dashboard}/>
              </Switch>
            </Container>
          </main>
        </div>
        <QrAddressPopup
          toggleQrAddressPopup={toggleQrAddressPopup}
          closeQrAddressPopup={closeQrAddressPopup}
          {...this.props.qrAddressPopup}/>
      </div>
    );
  }
}

const ConnectedComponent = connect(
  (state) => ({
    ...state.app.app.user,
    qrAddressPopup: state.app.qrAddressPopup
  }),
  {
    logout,
    fetchUser,
    openQrAddressPopup,
    toggleQrAddressPopup,
    closeQrAddressPopup
  }
)(AppWrapper);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
