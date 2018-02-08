import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader } from 'reactstrap';

import { openTxPopup, closeTxPopup, toggleTxPopup } from '../../../redux/modules/app/txPopup';
import { fetchTxs } from '../../../redux/modules/app/transactions';

import Tx from '../../../components/app/Tx';
import TxPopup from '../../../components/app/TxPopup';

let fetchRepeater;

class Transactions extends Component {
  componentDidMount() {
    const { fetchTxs } = this.props;
    fetchTxs();
    fetchRepeater = setInterval(fetchTxs, 15000);
  }

  componentWillUnmount() {
    clearInterval(fetchRepeater);
  }

  render() {
    const {
      open,
      openTxPopup,
      closeTxPopup,
      toggleTxPopup,
      txs,
      tx
    } = this.props;

    const renderTxs = () => {
      const sorted = Array.from(txs);
      return sorted
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((tx) => <Tx key={tx.id} tx={tx} openTxPopup={openTxPopup}/>);
    };

    return (
      <div>
        <Card>
          <CardHeader>
            <h4 className="my-0">Transactions</h4>
          </CardHeader>
          <CardBody>
            {renderTxs()}
          </CardBody>
        </Card>

        <TxPopup
          open={open}
          tx={tx}
          closeTxPopup={closeTxPopup}
          toggleTxPopup={toggleTxPopup}/>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    ...state.app.txPopup,
    ...state.app.transactions
  }),
  {
    openTxPopup,
    closeTxPopup,
    toggleTxPopup,
    fetchTxs
  }
)(Transactions);
