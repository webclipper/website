import React from 'react';
import Head from 'next/head';
import Icon from '../components/icon';
import './index.scss';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <script type="text/javascript" src="https://at.alicdn.com/t/font_1373112_ke1pzax8dc.js" />
      </Head>
      <div className={'main'}>
        <h1>Web Clipper</h1>
        <p className={'description'}>Now you can save any page on the web to Everywhere</p>
        <div className="install-button-container">
          {[
            {
              icon: 'github',
              title: 'Install for Github',
              href: 'https://github.com/webclipper/web-clipper/releases/latest',
            },
            {
              icon: 'chrome',
              title: 'Install for Chrome',
              href:
                'https://chrome.google.com/webstore/detail/web-clipper/mhfbofiokmppgdliakminbgdgcmbhbac',
            },
          ].map(({ title, icon, href }, index) => (
            <a key={icon} href={href} style={{ marginLeft: index === 0 ? 0 : 16 }} target="_blank">
              <div className="install-button">
                <Icon type={icon}></Icon>
                <div>{title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="brands">
        <h4>
          <span>Ability</span> to be compatible with <span>all</span> platforms.
        </h4>
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
