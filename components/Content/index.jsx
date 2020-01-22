import React from 'react';

export const ContentArea01 = () => (
  <section className="content-section-01">
    <div className="container">
      <div className="row">
        <div className="col-lg-5  col-md-6 col-sm-8">
          <div className="content-image">
            <img src="/static/image/content-image-1.png" alt="Switch Account" />
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 col-md-6">
          <div className="content-right-content">
            <h2 style={{ letterSpacing: 2 }}>One for All.</h2>
            <p>Web Clipper is no longer a consideration for your choice of notebook platform.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ContentArea02 = () => (
  <section className="content-section-02">
    <div className="container">
      <div className="row ">
        <div className="col-xl-6 col-sm-10 col-md-6 col-10 order-md-2 offset-xl-1 d-none d-md-block">
          <div className="content-image">
            <img src="/static/image/content-image-2.png" alt="" />
          </div>
        </div>
        <div className="col-xl-5 col-sm-12 col-md-6 order-md-1">
          <div className="content-text content-left-content">
            <h2>Remove the clutter</h2>
            <p>Reduce the clutter and clip only the article, recipe, or product information you really need.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const ContentArea03 = () => (
  <section className="content-section-03">
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-sm-6 col-md-6 col-10 d-none d-md-block">
          <div className="content-img">
            <img src="/static/image/content-image-3.png" alt="" />
          </div>
        </div>
        <div className="col-xl-6 col-md-6 offset-xl-1 col-sm-12">
          <div className="content-right-content">
            <h2>Never miss a thing</h2>
            <p>Event is not like most tech conferences. We want our presentations to engage the audience, spark discussion and inspire new ideas.</p>
            <ul className="content-list">
              <li>
                <span>
                  <i className="icon icon-check-2" />
                </span>
                Unlimited design possibility
              </li>
              <li>
                <span>
                  <i className="icon icon-check-2" />
                </span>
                Completely responsive
              </li>
              <li>
                <span>
                  <i className="icon icon-check-2" />
                </span>
                Easy to customize
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
