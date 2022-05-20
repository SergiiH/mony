import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './layouts/Layout';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: (props) => <Home {...props} />,
  },
  {
    path: '/about',
    key: 'ROOT',
    exact: true,
    component: () => (
      <Layout>
        <About />
      </Layout>
    ),
  },
];

export default routes;
