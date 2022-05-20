import React from 'react';
import RenderRoutes from './components/RenderRoutes';
import Layout from './layouts/Layout';
import routes from './routes';
import './styles/Main.scss';

const Main = (props) => (
  <Layout {...props}>
    <RenderRoutes routes={routes} {...props} />
  </Layout>
);

export default Main;
