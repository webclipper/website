import React from 'react';
import Icon from '../icon';
import MacBook from '../MacBook';

const supportPlatform = ['OneNote', 'notion', 'yuque', 'github', 'youdao'];

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
            <a href="#" className="btn btn--primary btn-height-60">
              Download free trial
            </a>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="hero-img">
            <MacBook img="https://unsplash.it/576/360/?random" scale={1.2} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
