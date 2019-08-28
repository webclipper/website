import React from 'react';
import Head from 'next/head';
import Icon from '../components/icon';
import './index.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <script type="text/javascript" src="https://at.alicdn.com/t/font_1373112_v52xqozph9.js" />
      </Head>
      <div className={'main'}>
        <h1>Web Clipper</h1>
        <p className={'description'}>Now you can save any page on the web to Everywhere</p>
      </div>
      <div className="brands">
        <h5>
          <strong>Ability</strong> to be compatible with <strong>all</strong> platforms.
        </h5>
        <div className="brand-icons">
          {['github', 'yuque', 'youdao', 'notion'].map(type => (
            <Icon key={type} type={type}></Icon>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
