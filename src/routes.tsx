import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import MainLayout from './hoc/mainLayout';
import Main from './components/main';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <MainLayout>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </MainLayout>
    <Footer />
  </BrowserRouter>
)

export default Routes;
