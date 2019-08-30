import React from 'react';

export default () => (
  <section className="footer-section">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-lg-2 col-md-3 ">
          <div className="footer-logo">
            <img src="/static/image/footer-logo.png" alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6  offset-lg-1">
          <ul className="nav footer-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About{' '}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {' '}
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 offset-lg-1">
          <ul className="footer-social-list">
            <li>
              <a href="#">
                <i className="icon icon-logo-fb-simple" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon icon-logo-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon icon-google" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>©2019 All right reserved. </p>
      </div>
    </div>
  </section>
);
