import React from 'react';
import ReactDOM from 'react-dom';
import Big from 'big.js';
import * as nearApiJs from 'near-api-js';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import reportWebVitals from './reportWebVitals';

import getConfig from './near/config';

async function initContract() {
  const nearConfig = getConfig(process.env.NEAR_ENV || 'testnet');

  const keyStore = new nearApiJs.keyStores.BrowserLocalStorageKeyStore();

  const near = await nearApiJs.connect({ keyStore, ...nearConfig });

  const walletConnection = new nearApiJs.WalletConnection(near);

  const account = await near.account(nearConfig.contractName);

  let currentUser;

  if (walletConnection.getAccountId()) {
    currentUser = {
      accoutId: walletConnection.getAccountId(),
      balance: (await walletConnection.account().state()).amount,
    };
  }

  const contract = await new nearApiJs.Contract(
    walletConnection.account(),
    nearConfig.contractName,
    {
      sender: walletConnection.getAccountId(),
    },
  );

  return { contract, currentUser, nearConfig, walletConnection, account };
}

window.nearInitPromise = initContract().then(
  ({ contract, currentUser, nearConfig, walletConnection, account }) => {
    ReactDOM.render(
      <BrowserRouter>
        <Main
          contract={contract}
          currentUser={currentUser}
          nearConfig={nearConfig}
          wallet={walletConnection}
          account={account}
        />
      </BrowserRouter>,
      document.getElementById('root'),
    );
  },
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
