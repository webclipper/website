import React from 'react';

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
                Web Clipper is an open source extension. You can save anything on the web to
                anywhere.
              </p>
            </div>
            <div className="compatible">
              <span>Compitable with:</span>
              <ul className="compatible-list">
                <li className="list-item">
                  <img src="/static/image/compatible-1.png" alt="" />
                </li>
                <li className="list-item">
                  <img src="/static/image/compatible-2.png" alt="" />
                </li>
                <li className="list-item">
                  <img src="/static/image/compatible-3.png" alt="" />
                </li>
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
            <img src="/static/image/laptop-image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
