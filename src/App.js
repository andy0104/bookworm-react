import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './components/layouts/Layout';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DefaultPage from './components/pages/DefaultPage';

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route component={DefaultPage} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
