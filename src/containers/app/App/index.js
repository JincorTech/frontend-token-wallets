import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../../../redux/modules/app/app';

class App extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;

    fetchUser();
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

export default connect(
  null,
  {
    fetchUser
  }
)(App);
