import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { Home, Cart } from './pages/index';
import { Header } from './components/index';
import { Route } from 'react-router-dom';
import { setPizzas } from './redux/actions/pizzas'

interface AppProps {
  items?: any,
  setPizzas?: any,
}


const App: React.FC<AppProps> = () => {

  const dispatch = useDispatch();

  const data = useSelector((state: any) => {
    return {
      items: state.pizzas.items,
      sortBy: state.filter.sortBy
    }
  });

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((resp: any) => {
      dispatch(setPizzas(resp.data.pizzas));
    })
  }, [dispatch])

  return (
    <div className="wrapper">
        <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={data.items} />} exact />
        <Route path="/cart" component={Cart} exact/>
      
      </div>
    </div>
  )
}

export default App;