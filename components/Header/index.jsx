import React from 'react';

export default () => (
  <header className="site-header">
    <div className="container">
      <div className="row justify-content-center align-items-center position-relative">
        <div className="col-sm-4 col-6 col-lg-2 col-xl-2 order-lg-1">
          <div className="brand">
            <a href="#">
              <img src="/static/image/main-logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-sm-7 col-lg-3 col-xl-3 offset-xl-1 d-none d-sm-block order-lg-3">
          <div className="header-btns">
            <div className="btn-1 btn-outlined">
              <a href="#">Github</a>
            </div>
            <div className="btn-2">
              <a href="#">Download trial</a>
            </div>
          </div>
        </div>
        <div className="col-sm-1 col-6 col-lg-7 col-xl-6 position-static order-lg-2">
          <div className="main-navigation">
            <ul className="main-menu">
              <li className="menu-item ">
                <a href="#features">Features</a>
              </li>
              <li className="menu-item">
                <a href="#">Services</a>
              </li>
              <li className="menu-item">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="menu-item">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu" />
        </div>
      </div>
    </div>
  </header>
);
