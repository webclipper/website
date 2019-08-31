import React from 'react';
import Header from '../components/Header';
import HeroArea from '../components/HeroArea';
import Footer from '../components/Footer';
import { ExtensionUrl } from '../common';

const Home = () => {
  return (
    <React.Fragment>
      <div className="landing-wrapper">
        <Header></Header>
        <HeroArea></HeroArea>
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
                    Create custom landing pages with Shades that convert more visitors than any
                    website, no coding required.
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
        {/* Feature Area*/}
        <section className="feature-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title">
                  <h2>One Extension, Every Solution</h2>
                  <p>
                    We designed and tested prototypes that helped identify pain points in the
                    account creation process. Together, we shaped the new standard.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row mb-d-30">
                  <div className="col-sm-6 mb--30">
                    <div className="feature-widget">
                      <div className="widget-icon">
                        <i className="icon icon-edit-72" />
                      </div>
                      <div className="content">
                        <h5>Easy to Use</h5>
                        <p>
                          Whether it’s a small internal app or a new for millions of customers, our
                          design and development teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb--30">
                    <div className="feature-widget">
                      <div className="widget-icon">
                        <i className="icon icon-layers-3" />
                      </div>
                      <div className="content">
                        <h5>300+ Blocks</h5>
                        <p>
                          Whether it’s a small internal app or a new for millions of customers, our
                          design and development teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb--30">
                    <div className="feature-widget">
                      <div className="widget-icon">
                        <i className="icon icon-tablet-mobile" />
                      </div>
                      <div className="content">
                        <h5>100% Responsive</h5>
                        <p>
                          Whether it’s a small internal app or a new for millions of customers, our
                          design and development teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb--30">
                    <div className="feature-widget">
                      <div className="widget-icon">
                        <i className="icon icon-book-open-2" />
                      </div>
                      <div className="content">
                        <h5>Rich Documentation</h5>
                        <p>
                          Whether it’s a small internal app or a new for millions of customers, our
                          design and development teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb--30">
                    <div className="feature-widget">
                      <div className="widget-icon">
                        <i className="icon icon-webpage" />
                      </div>
                      <div className="content">
                        <h5>50+ New Pages</h5>
                        <p>
                          Whether it’s a small internal app or a new for millions of customers, our
                          design and development teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mb--30">
                    <div className="feature-widget">
                      <div className="widget-icon">
                        <i className="icon icon-l-settings" />
                      </div>
                      <div className="content">
                        <h5>Quick Setup</h5>
                        <p>
                          Whether it’s a small internal app or a new for millions of customers, our
                          design and development teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Cta Section */}
        <section className="cta-section" style={{ marginTop: 100 }}>
          <div className="container">
            <div className="cta-inner-wrapper">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8">
                  <div className="cta-content">
                    <span className="title-small-text">Ready to take action?</span>
                    <h2>Try our free software!</h2>
                    <p>
                      We designed and tested prototypes that helped identify pain points in the
                      account creation process. Together, we shaped the new standard.
                    </p>
                    <div className="cta-btn">
                      <a
                        href={ExtensionUrl}
                        className="btn btn-outlined--white btn-with-icon btn-height-60"
                      >
                        Get Started
                        <span
                          style={{
                            color: '#cdf4ec;',
                            opacity: 0.8,
                            marginLeft: 2,
                            fontWeight: 400,
                            fontSize: 16,
                          }}
                        >
                          It's free
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
