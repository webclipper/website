import React from 'react';
import Header from '../components/Header';
import HeroArea from '../components/HeroArea';
import Feature from '../components/Feature';
import Cta from '../components/Cta';
import { ContentArea01, ContentArea02, ContentArea03 } from '../components/Content';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <div className="landing-wrapper">
        <Header></Header>
        <HeroArea></HeroArea>
        <ContentArea01 />
        <ContentArea02 />
        <ContentArea03 />
        <Feature></Feature>
        <Cta></Cta>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
