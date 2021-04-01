import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';

import ProductListScreen from './screens/ProductListScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container className='mc'>
          <h1>Hello</h1>
          <Route path='/' exact>
            <HomeScreen />
          </Route>
          <Route path='/products'>
            <ProductListScreen />
          </Route>
        </Container>
      </main>
    </Router>
  );
};

export default App;
