import React, { Component } from "react";
import { Link,matchPath,MemoryRouter,PathMatch} from "react-router-dom";
import styles from "../styles/index.module.scss";
export class LinkItem extends Component {

  
  constructor(props) {
    console.log(MemoryRouter('men'))
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

state={
  active:false
}

  handleClick(e){
    this.setState({active:true})
    e.stopPropagation() 
  }

  render() {
    return (
      <li className={styles.nav__item}>
        <Link onClick={this.handleClick} className={`${styles.nav__link} ${this.state.active && styles.active}`} to={`/${this.props.link}`}>
          {this.props.link.toUpperCase()}
        </Link>
      </li>
    );
  }
}

export default LinkItem;
