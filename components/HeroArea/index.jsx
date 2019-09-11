import React from 'react';
import Icon from '../icon';
import MacBook from '../MacBook';
import { ExtensionUrl } from '../../common';
import trackEvent from '../../common/event';

const supportPlatform = ['OneNote', 'notion', 'yuque', 'github', 'youdao', 'bear'];

export default () => (
  <div className="hero-area pt-4 pt-lg-5">
    <div className="float-shapes"></div>
    <div className="container">
      <div className="row justify-content-center justify-content-lg-start">
        <div className="col-md-8 col-lg-7 offset-lg-2">
          <h1 className="main-title">Save anything on the web to anywhere.</h1>
        </div>
        <div className="col-md-8 col-lg-6 offset-lg-2">
          <div className="hero-content-wrapper">
            <div className="main-content">
              <p>
                Web Clipper is an open source extension. You can use it to save anything on the web
                to anywhere.
              </p>
            </div>
            <div className="compatible">
              <span>Support :</span>
              <ul className="compatible-list" style={{ fontSize: 32 }}>
                {supportPlatform.map(o => (
                  <li key={o}>
                    <Icon type={o}></Icon>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 pt-lg-5">
          <div className="hero-btn">
            <a
              href={ExtensionUrl}
              className="btn btn--primary"
              style={{ width: 180 }}
              onClick={() => {
                trackEvent('download', {
                  page: 'HeroArea',
                });
              }}
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="hero-img">
            <MacBook img="/static/image/screenshot.png" scale={1.2} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
