import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUser } from '../../../redux/modules/app/app';

class App extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;

    fetchUser();
  }

  render() {
    const { children } = this.props;

    console.log(this.props);

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
    fetchUser
  },
  null,
  { pure: false }
)(App);
const ComponentWithRouter = withRouter(ConnectedComponent);

export default ComponentWithRouter;
