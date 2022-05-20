import 'regenerator-runtime/runtime';
import React from 'react';
const Header = ({ contract, currentUser, nearConfig, wallet }) => {
  const signIn = () => {
    console.log('clicked');

    wallet.requestSignIn(
      { contractId: nearConfig.contractName },
      'Near book',
      null,
      null,
    );
  };

  const signOut = () => {
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

  return (
    <>
      <p>Header</p>
      {currentUser ? (
        <button type="button" onClick={signOut}>
          Log out
        </button>
      ) : (
        <button type="button" onClick={signIn}>
          Log in
        </button>
      )}
    </>
  );
};

export default Header;
