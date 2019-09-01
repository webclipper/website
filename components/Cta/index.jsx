import React from 'react';
import { ExtensionUrl } from '../../common';

export default () => (
  <section className="cta-section" style={{ marginTop: 100 }}>
    <div className="container">
      <div className="cta-inner-wrapper">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="cta-content">
              <span className="title-small-text">Ready to take action?</span>
              <h2>Try our free software!</h2>
              <p>
                We designed and tested prototypes that helped identify pain points in the account
                creation process. Together, we shaped the new standard.
              </p>
              <div className="cta-btn">
                <a
                  href={ExtensionUrl}
                  className="btn btn-outlined--white btn-with-icon btn-height-60"
                >
                  Get Started
                  <span
                    style={{
                      color: '#cdf4ec',
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
);
