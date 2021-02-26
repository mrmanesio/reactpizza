import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Home, Cart } from './pages/index';
import { Header } from './components/index';
import { Route } from 'react-router-dom';
import {setPizzas as setPizzasAction} from './redux/actions/pizzas'

interface AppProps {
  items: any,
  setPizzas: any,
}

class App extends React.Component<AppProps> {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then( (resp)  => {
      this.props.setPizzas(resp.data.pizzas);
    })
  }

  render() {

    return (
        <div className="wrapper">
          <Header />
        <div className="content">
          <Route path="/" render={() => <Home items = {this.props.items}/> } exact />
          <Route path="/cart" component={Cart} exact/>
        
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state: any) => {
  return {
    items: state.pizzas.items,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setPizzas: (items:any) => dispatch(setPizzasAction(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps ) (App);