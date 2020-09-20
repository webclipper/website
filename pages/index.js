import React from 'react';
import Header from '../components/Header';
import HeroArea from '../components/HeroArea';
import Footer from '../components/Footer';
import Cta from '../components/Cta';
import { ContentArea01, ContentArea02 } from '../components/Content';
import './index.scss';

const Home = () => {
  return (
    <React.Fragment>
      <div className="landing-wrapper">
        <Header></Header>
        <HeroArea></HeroArea>
        <ContentArea01 />
        <ContentArea02 />
        <Cta></Cta>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default Home;
