import React from 'react';
import Layout from './Layout/Layout';
import Counter from './Counter/Counter';

const App = () => (
  <Layout>
    <Counter initialState={10} step={2} />
  </Layout>
);

export default App;
