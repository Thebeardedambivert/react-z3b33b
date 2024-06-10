import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function Header(props) {
  const clock = Date().toLocaleString();

  return (
    <h1 className="orange">
      Hello {props.name} The time is: {clock}
    </h1>
  );
}

function Page() {
  const name = 'Uzo';
  return (
    <>
      <Header name={name} />
      <p>Hey</p>
      <p>Hi</p>
    </>
  );
}

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

setInterval(function () {
  root.render(<Page />);
});
