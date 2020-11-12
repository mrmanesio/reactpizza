import React from 'react';

import { Home, Cart } from './pages/index';
import { Header } from './components/index';
import { Route } from 'react-router-dom';

function App() {



  return (
      <div className="wrapper">
        <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact/>
      
      </div>
    </div>


  );
}

export default App;