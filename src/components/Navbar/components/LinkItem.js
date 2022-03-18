import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/index.module.scss";
export class LinkItem extends Component {
  render() {
    return (
      <li className={styles.nav__item}>
        <NavLink className={({ isActive }) => (isActive ? `${styles.active} ${styles.nav__link}` : styles.nav__link)} to={`/${this.props.link}`}>
          {this.props.link.toUpperCase()}
        </NavLink>
      </li>
    );
  }
}

export default LinkItem;
