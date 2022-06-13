import React from "react";
import "../App.css";

function Header() {
  return (
    <header>
      <div>
        <a href='#'>
          <img src='logo.svg' alt='Logo of propel' />
        </a>
        <ul>
          <li>
            <a href='#'>Outboard motor</a>
          </li>
          <li>
            <a href='#'>Inboard motor</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#'>Support</a>
          </li>
          <li>
            <a href='#'>Stores</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
