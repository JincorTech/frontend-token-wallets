import React from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

import Tx from '../../../components/Transactions/Tx';

const Transactions = (props) => {
  console.log(props);

  return (
    <div className="animated fadeIn mt-4">
      <Row>
        <Col xs="12" lg="5">
          <Card>
            <CardBody>
              <Tx
                direction="in"
                status="pending"
                type="eth_transfer"
                amount={200}/>

              <Tx
                direction="out"
                status="success"
                type="erc20_transfer"
                amount={50}
                token={{
                  contractAddress: '0x0123456789012345678901234567890',
                  symbol: 'JCR',
                  decimals: 18
                }}/>

              <Tx
                direction="out"
                status="failure"
                type="erc20_transfer"
                amount={100}
                token={{
                  contractAddress: '0x0123456789012345678901234567890'
                }}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Transactions;
