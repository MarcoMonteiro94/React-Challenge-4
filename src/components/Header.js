import React, { Component } from "react";

import logo from "../assets/Shape.png";
import account from "../assets/account_circle - material.png";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <img src={logo} alt="logo" />
          <ul>
            <li>Meu Perfil</li>
            <li>
              <img src={account} alt="account" />
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
