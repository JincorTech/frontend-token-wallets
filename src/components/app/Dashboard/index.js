import React from 'react';

import { Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap';

const Dashboard = () => (
  <div className="animated fadeIn mt-4">
    <Row>
      <Col xs="12" lg="5">
        <Card className="text-white bg-info">
          <CardBody>
            <h2 className="mb-2">1204.123984</h2>
            <h5 className="mb-2">ETH wallet</h5>
            <p>0x32be343b94f860124dc4fee278fdcbd38c102d88</p>
            <a className="btn btn-secondary"><i className="icon-magic-wand"></i>&nbsp;&nbsp;Transfer</a>{' '}
            <button className="btn btn-secondary text-white"><i className="icon-wallet"></i>&nbsp;&nbsp;Copy address</button>
          </CardBody>
        </Card>

        <Card className="text-white bg-success">
          <CardBody>
            <h2 className="mb-2">1204.123984</h2>
            <h5 className="mb-2">ERC20 token wallet</h5>
            <p>0x32be343b94f860124dc4fee278fdcbd38c102d88</p>
            <a className="btn btn-secondary"><i className="icon-magic-wand"></i>&nbsp;&nbsp;Transfer</a>{' '}
            <button className="btn btn-secondary text-white"><i className="icon-wallet"></i>&nbsp;&nbsp;Copy address</button>
          </CardBody>
        </Card>
      </Col>

      <Col xs="12" lg="3"></Col>

      <Col xs="12" lg="4">
        <Card className="bg-white">
          <CardHeader>
            <h4 className="my-0">Balances</h4>
            <p className="mt-1 mb-0">Your personal balances</p>
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

export default Dashboard;
