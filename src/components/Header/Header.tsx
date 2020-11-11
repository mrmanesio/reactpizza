import React from 'react';
import Button from '../Button/Button';
import logoSvg from '../../assets/img/pizza-logo.svg';

const Header = () => {
    return (
        <header className="header">
        <div className="container">
          <div className="header__logo"> 
            <img width="38" src={logoSvg} alt="Pizza" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className="header__cart">
           <Button className="button--cart" />
          </div>
        </div>
      </header>
    )
}

export default Header;