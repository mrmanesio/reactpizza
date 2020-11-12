import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../Button/Button';
import logoSvg from '../../assets/img/pizza-logo.svg';

const Header = () => {
    return (
        <header className="header">
        <div className="container">
          <Link to='/'>
            <div className="header__logo"> 
              <img width="38" src={logoSvg} alt="Pizza" />
              <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </Link>
          <div className="header__cart">
            <Link to='/cart' >
               <Button className="button--cart" />
           </Link>
          </div>
        </div>
      </header>
    )
}

export default Header;