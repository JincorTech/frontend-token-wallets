import React from 'react';
import { Container } from 'reactstrap';

import Header from '../../../components/app/Header';
import Sidebar from '../../../components/app/Sidebar';

const AppWrapper = (props) => {
  const {
    children
  } = props;

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar {...props}/>
        <main className="main">
          <Container fluid>
            {children}
          </Container>
        </main>
      </div>
    </div>
  );
};

export default AppWrapper;
