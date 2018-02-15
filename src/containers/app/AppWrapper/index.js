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

// empty mock-containers
import Analytics from '../Analytics';
import Blog from '../Blog';
import Help from '../Help';
import Invoices from '../Invoices';
import Marketplace from '../Marketplace';
import Projects from '../Projects';
import Ratings from '../Ratings';
import Support from '../Support';

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

                <Route exact path={namedRoutes.analytics} component={Analytics}/>
                <Route exact path={namedRoutes.blog} component={Blog}/>
                <Route exact path={namedRoutes.help} component={Help}/>
                <Route exact path={namedRoutes.invoices} component={Invoices}/>
                <Route exact path={namedRoutes.marketplace} component={Marketplace}/>
                <Route exact path={namedRoutes.projects} component={Projects}/>
                <Route exact path={namedRoutes.ratings} component={Ratings}/>
                <Route exact path={namedRoutes.support} component={Support}/>

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
