import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import MainSection from './components/main-section/main-section';
import FeaturedCollection from './components/featured-collection/featured-collections';
import Footer from './components/footer/footer';
import {Switch, Route} from "react-router-dom"
import HomePage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop';
import singleProduct from './components/single-product/single-product';
import CartPage from './components/pages/cart-page/cart-page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route path='/shop' component={ Shop }/>
        <Route path='/product/:id' component={ singleProduct }/>
        <Route path='/cart' component={ CartPage }/>
        <Route path='*' component={ NotFound }/>
      </Switch>
    </div>
  );
}

export default App;
