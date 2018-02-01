import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { checkAuth } from '../../../redux/modules/app/app';

class App extends Component {
  componentWillMount() {
    const { checkAuth } = this.props;

    checkAuth();
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

const ConnectedComponent = connect(
  null,
  {
    checkAuth
  }
)(App);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
