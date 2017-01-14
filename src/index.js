import React from 'react';
import { render } from 'react-dom';

const Root = () => {
  return (
    <div className="wrapper">
      <img src="//raw.githubusercontent.com/cheesein/graphics/master/logos/logo.png" alt="CheeseIn"/>
      <div className="title">cheeseIn</div>
      <div className="subtitle">Modular check in system</div>
    </div>
  )
};

render(<Root/>, document.querySelector('#main'));
