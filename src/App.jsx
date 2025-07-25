import React from 'react';
import Layout from './components/Layout';
import Balance from './components/Balance';
import Form from './components/Form';
import Transactions from './components/Transactions';

const App = () => {
  return (
    <div>
      <Layout>
        <Balance/>
        <Form/>
        <Transactions/>
      </Layout>
    </div>
  );
};

export default App;