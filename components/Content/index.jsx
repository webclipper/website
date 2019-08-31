import React from 'react';

export default () => (
  <React.Fragment>
    {/* Content Area 01*/}
    <section className="content-section-01">
      <div className="container">
        <div className="row">
          <div className="col-lg-5  col-md-6 col-sm-8">
            <div className="content-image">
              <img src="/static/image/content-image-1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 col-md-6">
            <div className="content-right-content">
              <h2>Build Beautiful Landing Pages Faster.</h2>
              <p>
                Create custom landing pages with Shades that convert more visitors than any website,
                no coding required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Content Area 02 */}
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
              <h2>Completely Free for Everyone.</h2>
              <div className="content-small-card">
                <div className="card-icon">
                  <i className="icon icon-users-mm-2" />
                </div>
                <div className="card-content">
                  <h5>Built for real users</h5>
                  <p>Editing and customizing Essential Landing is easy and fast.</p>
                </div>
              </div>
              <div className="content-small-card">
                <div className="card-icon">
                  <i className="icon icon-settings" />
                </div>
                <div className="card-content">
                  <h5>Easy setup process</h5>
                  <p>Editing and customizing Essential Landing is easy and fast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Content Area */}
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
              <p>
                Event is not like most tech conferences. We want our presentations to engage the
                audience, spark discussion and inspire new ideas.
              </p>
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
  </React.Fragment>
);
