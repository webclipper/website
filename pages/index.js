import React from 'react';
import Head from 'next/head';
import Icon from '../components/icon';
import './index.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <script type="text/javascript" src="https://at.alicdn.com/t/font_1373112_0ethyx2l5nn4.js" />
      </Head>
      <div className="brands">
        <h5>
          <strong>Ability</strong> to be compatible with <strong>all</strong> platforms.
        </h5>
        <div className="brand-icons">
          {['github', 'yuque', 'youdao'].map(type => (
            <Icon key={type} type={type}></Icon>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
