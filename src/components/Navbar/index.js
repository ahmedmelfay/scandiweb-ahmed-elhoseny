import React, { Component } from "react";
import LinkItem from "./components/LinkItem";
import styles from "./styles/index.module.scss";
export class Navbar extends Component {
  render() {
    return (
      <nav id={styles.navbar}>
        <div className="container">
          <div className={styles.inner__nav}>
            <ul className={styles.nav__list}>
              <LinkItem link="women" />
              <LinkItem link="men" />
              <LinkItem link="children" />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
