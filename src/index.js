import React from 'react';
import { render } from 'react-dom';
import Intro from './components/Intro';
import Header from './components/Header';

const Root = () => {
  return (
    <div className='Root-wrapper'>
      <Header />
      <Intro />
    </div>
  );
};

render(<Root />, document.querySelector('#main'));
