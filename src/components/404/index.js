import React, { Component } from "react";

export class NotFound extends Component {
  render() {
    const styles = {
      width: "100vw",
      height: "calc(100vh - 80px)",
      fontSize: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "80px",
      left: "0",
    };
    return (
      <div style={styles}>
        Error<span style={{ color: "red" }}>&nbsp;404</span>, page not found
      </div>
    );
  }
}

export default NotFound;
