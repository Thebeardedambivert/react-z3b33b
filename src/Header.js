import React from 'react';


export function Header(props) {
    let [clock, setClock] = React.useState(Date().toLocaleString());

    console.log(clock);

    setInterval(() => {
      setClock(Date().toLocaleString());
    }, 1000);

    console.log('Header executed');
  
    return (
      <h1 className="orange">
        Hello {props.name} The time is: {clock}
      </h1>
    );
  }