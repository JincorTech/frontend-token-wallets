import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap';

import { fetchBalances } from '../../../redux/modules/app/dashboard';

class Dashboard extends Component {
  componentDidMount() {
    const { fetchBalances } = this.props;

    fetchBalances();
  }

  render() {
    const {
      ethBalance,
      erc20TokenBalance,
      ethAddress,
      email,
      name
    } = this.props;

    return (
      <div className="animated fadeIn mt-4">
        <Row>
          <Col xs="12" lg="5">
            <Card className="text-black bg-white">
              <CardBody>
                <h2 className="mb-2">Hello, {name}!</h2>
                <h5 className="mb-2">We glad to see you again.</h5>
                <p>Your email: {email}</p>
              </CardBody>
            </Card>

            <Card className="text-white bg-info">
              <CardBody>
                <h2 className="mb-2">{ethBalance}</h2>
                <h5 className="mb-2">ETH wallet</h5>
                <p>{ethAddress}</p>
                <a className="btn btn-secondary disabled"><i className="icon-magic-wand"></i>&nbsp;&nbsp;Transfer</a>{' '}
                <button className="btn btn-secondary text-white" disabled><i className="icon-wallet"></i>&nbsp;&nbsp;Copy address</button>
              </CardBody>
            </Card>

            <Card className="text-white bg-success">
              <CardBody>
                <h2 className="mb-2">{erc20TokenBalance}</h2>
                <h5 className="mb-2">ERC20 token wallet</h5>
                <p>{ethAddress}</p>
                <a className="btn btn-secondary disabled"><i className="icon-magic-wand"></i>&nbsp;&nbsp;Transfer</a>{' '}
                <button className="btn btn-secondary text-white" disabled><i className="icon-wallet"></i>&nbsp;&nbsp;Copy address</button>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg="3"></Col>

          <Col xs="12" lg="4">
            <Card className="bg-white">
              <CardHeader>
                <h4 className="my-0">Balances</h4>
                <p className="mt-1 mb-0">This module disabled now</p>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <tbody>
                  <tr>
                    <td>ETH</td>
                    <td className="text-success">1.23388485 (+5%)</td>
                  </tr>
                  <tr>
                    <td>ERC20</td>
                    <td className="text-success">29494.23388485 (+15%)</td>
                  </tr>
                  <tr>
                    <td>USD</td>
                    <td className="text-danger">800 (-5%)</td>
                  </tr>
                  <tr>
                    <td>RUB</td>
                    <td className="text-danger">10030 (-55%)</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const ConnectedComponent = connect(
  (state) => ({
    ...state.app.dashboard,
    ...state.app.app.user
  }),
  {
    fetchBalances
  }
)(Dashboard);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;
