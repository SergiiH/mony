import React from 'react';
import Form from '../../components/Form';

const Home = (props) => {
  const { account } = props;
  return (
    <div>
      <Form account={account} />
    </div>
  );
};
export default Home;
