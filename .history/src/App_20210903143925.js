import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import List from './pages/ListProduct';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import ProductDetails from './pages/ProductDetails';
import CartList from './pages/CartList';
import Payment from './pages/Payment';
import OrderHistory from './pages/OrderHistory';
import OrderDetail from './pages/OrderDetail';
import ReactDOM from "react-dom";

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/list/id/:id">
          <List />
        </Route>
        <Route path="/detail/id/:id">
          <ProductDetails />
        </Route>
        <Route path="/cart">
          <CartList />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/orderHis">
          <OrderHistory />
        </Route>
        <Route path="/orderDetail/id/:id">
          <OrderDetail />
        </Route>
      </Switch>
    </>
  );
}

export default App;
