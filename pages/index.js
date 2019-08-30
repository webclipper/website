import React from 'react';

const Home = () => {
  return (
    <React.Fragment>
      <div className="landing-wrapper">
        <header className="site-header">
          <div className="container">
            <div className="row justify-content-center align-items-center position-relative">
              <div className="col-sm-4 col-6 col-lg-2 col-xl-2 order-lg-1">
                <div className="brand">
                  <a href>
                    <img src="/static/image/main-logo.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-sm-7 col-lg-3 col-xl-3 offset-xl-1 d-none d-sm-block order-lg-3">
                <div className="header-btns">
                  <div className="btn-1 btn-outlined">
                    <a href="#">Login</a>
                  </div>
                  <div className="btn-2">
                    <a href="#">Download trial</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-1 col-6 col-lg-7 col-xl-6 position-static order-lg-2">
                <div className="main-navigation">
                  <ul className="main-menu">
                    <li className="menu-item has-dropdown">
                      <a href="#features">Free Landing Pages</a>
                      <ul className="menu-dropdown">
                        <li className="single-item">
                          <a href="../s01/index.html">
                            <h3>Mobile Application</h3>
                            <p>Best for Mobile App Presentation</p>
                          </a>
                        </li>
                        <li className="single-item">
                          <a href="../s02/index.html">
                            <h3>Web Application</h3>
                            <p>Best for Mobile App Presentation</p>
                          </a>
                        </li>
                        <li className="single-item">
                          <a href="../s03/index.html">
                            <h3>SaaS Application</h3>
                            <p>Best for Mobile App Presentation</p>
                          </a>
                        </li>
                        <li className="single-item">
                          <a href="../s04/index.html">
                            <h3> SaaS Subscription</h3>
                            <p>Best for Mobile App Presentation</p>
                          </a>
                        </li>
                      </ul>
                    </li>
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
        <div className="hero-area pt-4 pt-lg-5">
          <div className="float-shapes"></div>
          <div className="container">
            <div className="row justify-content-center justify-content-lg-start">
              <div className="col-md-8 col-lg-7 offset-lg-2">
                <h1 className="main-title">Landing page built for software.</h1>
              </div>
              <div className="col-md-8 col-lg-6 offset-lg-2">
                <div className="hero-content-wrapper">
                  <div className="main-content">
                    <p>
                      Create custom landing pages with Shades that convert more visitors than any
                      website—no coding required.
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
        {/* Client-Section */}
        <section className="client-section">
          <div className="container">
            <div className="client-brand-wrapper">
              <div className="single-brand">
                <img src="/static/image/logo-5.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="/static/image/logo-4.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="/static/image/logo-3.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="/static/image/logo-2.png" alt="" />
              </div>
              <div className="single-brand">
                <img src="/static/image/logo-1.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Content Area 01*/}
        <section className="content-section-01">
          <div className="container">
            <div className="row">
              <div className="col-lg-5  col-md-6 col-sm-8">
                <div className="content-image">
                  <img src="./image/content-image-1.png" alt="" />
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
                  <img src="./image/content-image-2.png" alt="" />
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
                  <img src="./image/content-image-3.png" alt="" />
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
                  <h2>One Software, Every Solution</h2>
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
        {/* Testimonial Area */}
        <section className="testimonial-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title">
                  <h2>30,000+ Customers Trust Us</h2>
                  <p>
                    We designed and tested prototypes that helped identify pain points in the
                    account creation process. Together, we shaped the new standard.
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-slider-wrapper">
              <div className="row justify-content-center position-relative">
                <div className="col-lg-10 ">
                  <div className="testimonial-slider">
                    <div className="single-slide">
                      <div className="testimonial-content">
                        <p>
                          “It’s really helped us grow. I can keep all of the customer’s information
                          in there so if I need to look up something in the future or call them for
                          a follow-up, I have all of that there so it’s really helped us organize
                          the whole business.”
                        </p>
                        <div className="t-small-card">
                          <div className="image">
                            <img src="./image/t6-nav-1.png" alt="" />
                          </div>
                          <div className="content">
                            <h5>Gilbert Palmer</h5>
                            <span>Founder of Crips</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-slide">
                      <div className="testimonial-content">
                        <p>
                          “It’s really helped us grow. I can keep all of the customer’s information
                          in there so if I need to look up something in the future or call them for
                          a follow-up, I have all of that there so it’s really helped us organize
                          the whole business.”
                        </p>
                        <div className="t-small-card">
                          <div className="image">
                            <img src="./image/t6-nav-2.png" alt="" />
                          </div>
                          <div className="content">
                            <h5>Lucy Rios</h5>
                            <span>Design Director at Craze</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="single-slide">
                      <div className="testimonial-content">
                        <p>
                          “It’s really helped us grow. I can keep all of the customer’s information
                          in there so if I need to look up something in the future or call them for
                          a follow-up, I have all of that there so it’s really helped us organize
                          the whole business.”
                        </p>
                        <div className="t-small-card">
                          <div className="image">
                            <img src="./image/t3-nav-1.png" alt="" />
                          </div>
                          <div className="content">
                            <h5>Sallie Lawson</h5>
                            <span>Owner of Crips</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-btns" />
              </div>
            </div>
          </div>
        </section>
        {/* Cta Section */}
        <section className="cta-section">
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
                      <a href="#" className="btn btn-outlined--white btn-with-icon btn-height-60">
                        <i className="icon icon-cloud-download-95" /> Download Now
                      </a>
                      <p className="extra-info-text">No credit card required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    <a href>
                      <i className="icon icon-logo-fb-simple" />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="icon icon-logo-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href>
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
      </div>
    </React.Fragment>
  );
};

export default Home;
