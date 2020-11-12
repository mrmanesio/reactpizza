import React from 'react';
import axios from 'axios'

import { Home, Cart } from './pages/index';
import { Header } from './components/index';
import { Route } from 'react-router-dom';

function App() {

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(()=> {

    axios.get('http://localhost:3000/db.json').then( resp  => {
      setPizzas(resp.data.pizzas);
    })

    // fetch('http://localhost:3000/db.json').then(resp => resp.json()).then(json => {
    //   setPizzas(json.pizzas);
    // })
  }, [])

  return (
      <div className="wrapper">
        <Header />
      <div className="content">
        <Route path="/" render={() => <Home items = {pizzas}/> } exact />
        <Route path="/cart" component={Cart} exact/>
      
      </div>
    </div>
  );
}

export default App;