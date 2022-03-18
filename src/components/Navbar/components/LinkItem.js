import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/index.module.scss";
export class LinkItem extends Component {
  render() {
    return (
      <li className={styles.nav__item}>
        <Link className={styles.nav__link} to={`/${this.props.link}`}>
          {this.props.link.toUpperCase()}
        </Link>
      </li>
    );
  }
}

export default LinkItem;
