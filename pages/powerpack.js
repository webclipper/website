import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './powerpack.scss';

const Powerpack = () => {
  return (
    <React.Fragment>
      <div className='landing-wrapper'>
        <Header></Header>
        <section className='pricing-section'>
          <div className='shape'>
            <img src='./image/landing-2-shape.svg' alt='' />
          </div>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='section-title text-center'>
                  <h2>Mark your next step</h2>
                  <p>
                    We designed and tested prototypes that helped identify pain
                    points in the account creation process. Together, we shaped
                    the new standard.
                  </p>
                </div>
              </div>
            </div>
            <div className='custom-tab-wrapper monthly' id='pricing-tab-7'>
              <div className='row mb-d-30'>
                <div className='col-lg-4'>
                  <div className='pricing-card'>
                    <div className='card-head'>
                      <h6>Free</h6>
                      <h2>
                        <span className='small-title'>$</span>
                        <span
                          className='big-txt'
                          data-monthly={0}
                          data-yearly={14}
                        >
                          19
                        </span>
                        <span
                          className='month'
                          data-monthly='/month'
                          data-yearly='/year'
                        >
                          /month
                        </span>
                      </h2>
                      <p>
                        Good for small business launching their products less
                        then once a year
                      </p>
                    </div>
                    <div className='card-content'>
                      <ul className='pricing-list'>
                        <li>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          Unlimited Blocks
                        </li>
                        <li>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          5GB Clould Storages
                        </li>
                        <li className='disable-opt'>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          Custom Domain Names
                        </li>
                        <li className='disable-opt'>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          Unlimited Emails
                        </li>
                      </ul>
                      <div className='card-btn'>
                        <a href='#' className='btn btn--primary'>
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pricing-card active'>
                    <div className='card-head'>
                      <h6>Pro</h6>
                      <span className='card-badge'>Popular</span>
                      <h2>
                        <span className='small-title'>$</span>
                        <span
                          className='big-txt'
                          data-monthly={29}
                          data-yearly={25}
                        >
                          29
                        </span>
                        <span
                          className='month'
                          data-monthly='/month'
                          data-yearly='/year'
                        >
                          /month
                        </span>
                      </h2>
                      <p>
                        Good for small business launching their products less
                        then once a year
                      </p>
                    </div>
                    <div className='card-content'>
                      <ul className='pricing-list'>
                        <li>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          Unlimited Blocks
                        </li>
                        <li>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          5GB Clould Storages
                        </li>
                        <li>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          Custom Domain Names
                        </li>
                        <li className='disable-opt'>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          Unlimited Emails
                        </li>
                      </ul>
                      <div className='card-btn'>
                        <a href='#' className='btn btn--primary'>
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='pricing-card'>
                    <div className='card-head'>
                      <h6>Exclusive</h6>
                      <h2>
                        <span className='small-title'>$</span>
                        <span
                          className='big-txt'
                          data-monthly={59}
                          data-yearly={49}
                        >
                          59
                        </span>
                        <span
                          className='month'
                          data-monthly='/month'
                          data-yearly='/year'
                        >
                          /month
                        </span>
                      </h2>
                      <p>
                        Good for small business launching their products less
                        then once a year
                      </p>
                    </div>
                    <div className='card-content'>
                      <ul className='pricing-list'>
                        <li>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          Unlimited Blocks
                        </li>
                        <li>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          5GB Clould Storages
                        </li>
                        <li>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          Custom Domain Names
                        </li>
                        <li>
                          <span>
                            <i className='icon icon-check-2' />
                          </span>
                          Unlimited Emails
                        </li>
                      </ul>
                      <div className='card-btn'>
                        <a href='#' className='btn btn--primary'>
                          Buy Now
                        </a>
                      </div>
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

export default Powerpack;
