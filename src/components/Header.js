import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <img src="https://i.imgur.com/KDIDiSE.png" alt="logo" />
          <ul>
            <li>Meu Perfil</li>
            <li>
              <i className="material-icons">account_circle</i>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
