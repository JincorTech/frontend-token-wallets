import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardBody } from 'reactstrap';

import { openTxPopup, closeTxPopup, toggleTxPopup } from '../../../redux/modules/app/txPopup';

import Tx from '../../../components/Transactions/Tx';
import TxPopup from '../../../components/Transactions/TxPopup';

const Transactions = (props) => {
  const {
    open,
    openTxPopup,
    closeTxPopup,
    toggleTxPopup,
    txs,
    tx
  } = props;

  return (
    <div className="animated fadeIn mt-4">
      <Row>
        <Col xs="12" lg="5">
          <Card>
            <CardBody>
              {txs.map((tx) => <Tx key={tx.id} tx={tx} openTxPopup={openTxPopup}/>)}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <TxPopup
        open={open}
        tx={tx}
        closeTxPopup={closeTxPopup}
        toggleTxPopup={toggleTxPopup}/>
    </div>
  );
};

export default connect(
  (state) => ({
    ...state.app.txPopup,
    ...state.app.transactions
  }),
  {
    openTxPopup,
    closeTxPopup,
    toggleTxPopup
  }
)(Transactions);
