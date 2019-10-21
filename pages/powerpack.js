import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Price from '../components/Price';

import './powerpack.scss';

const Powerpack = () => {
  return (
    <React.Fragment>
      <div className='landing-wrapper'>
        <Header></Header>
        <Price></Price>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default Powerpack;
