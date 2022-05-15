import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>
            PRODUTOS
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="contato">
            CONTATO
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
<h1>HEADER</h1>;
