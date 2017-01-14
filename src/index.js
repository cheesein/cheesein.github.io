import React from 'react';
import { render } from 'react-dom';
import Intro from './components/Intro';

const Root = () => {
  return (
    <Intro />
  )
};

render(<Root/>, document.querySelector('#main'));
