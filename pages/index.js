import React from 'react';
import Head from 'next/head';
import Icon from '../components/icon';

import './index.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <script type="text/javascript" src="//at.alicdn.com/t/font_1373112_0ethyx2l5nn4.js" />
      </Head>
      <div class="container" style={{ textAlign: 'center' }}>
        <h5>
          <strong>Ability</strong> to be compatible with <strong>all</strong> platforms.
        </h5>
        <Icon type="github" style={{ fontSize: 32 }}></Icon>
        <Icon type="yuque" style={{ fontSize: 32 }}></Icon>
        <Icon type="youdao" style={{ fontSize: 32 }}></Icon>
      </div>
    </React.Fragment>
  );
};

export default Home;
