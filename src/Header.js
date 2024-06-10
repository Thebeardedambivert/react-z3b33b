import React from "react";


export function Header(props) {
    const clock = Date().toLocaleString();
  
    return (
      <h1 className="orange">
        Hello {props.name} The time is: {clock}
      </h1>
    );
  }