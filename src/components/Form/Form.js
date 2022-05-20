import React from 'react';

const Form = ({ account }) => {
  console.log(account);

  const sendMoney = async () => {
    account.sendMoney('motzart2.testnet', '1000000000000000000000000');
  };
  return <button onClick={sendMoney}>send</button>;
};

export default Form;
