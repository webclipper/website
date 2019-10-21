import React from 'react';
import './index.scss';

const data = [
  {
    active: false,
    title: 'Basic',
    badge: 'Popular',
    price: '10',
    description: 'Good for small business',
    feature: ['Unlimited Blocks', '5GB Clould Storages'],
    featureNotSupported: ['Custom Domain Names', 'Unlimited Emails'],
    button: 'Free',
    Href: '#'
  },
  {
    active: false,
    title: 'Monthly',
    badge: 'Popular',
    price: '10',
    description: 'Good for small business',
    feature: ['Unlimited Blocks', '5GB Clould Storages'],
    featureNotSupported: ['Custom Domain Names', 'Unlimited Emails'],
    button: 'Free',
    Href: '#'
  },
  {
    active: true,
    title: 'Basic',
    badge: 'Popular',
    price: '10',
    description: 'Good for small business',
    feature: ['Unlimited Blocks', '5GB Clould Storages'],
    featureNotSupported: ['Custom Domain Names', 'Unlimited Emails'],
    button: 'Free',
    Href: '#'
  }
];

export default () => (
  <section className='pricing-section'>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-8'>
          <div className='section-title text-center'>
            <h2>Buy the Web Clipper Powerpack</h2>
            <p>All prices listed below are in USD</p>
          </div>
        </div>
      </div>
      <div className='custom-tab-wrapper monthly' id='pricing-tab-7'>
        <div className='row mb-d-30'>
          {data.map(o => (
            <div className='col-lg-4'>
              <div className={`pricing-card ${o.active ? 'active' : ''}`}>
                <div className='card-head'>
                  <h6>{o.title}</h6>
                  {!!o.badge && <span className='card-badge'>Popular</span>}
                  <h2>
                    <span className='small-title'>$</span>
                    <span
                      className='big-txt'
                      data-monthly={o.price}
                      data-yearly={14}
                    >
                      {o.price}
                    </span>
                    <span
                      className='month'
                      data-monthly='/month'
                      data-yearly='/year'
                    >
                      /month
                    </span>
                  </h2>
                  <p>{o.description}</p>
                </div>
                <div className='card-content'>
                  <ul className='pricing-list'>
                    {o.feature.map(fe => (
                      <li>
                        <span>
                          <i className='icon icon-check-2' />
                        </span>
                        {fe}
                      </li>
                    ))}
                    {o.featureNotSupported.map(fe => (
                      <li className='disable-opt'>
                        <span>
                          <i className='icon icon-check-2' />
                        </span>
                        {fe}
                      </li>
                    ))}
                  </ul>
                  <div className='card-btn'>
                    <a href={o.Href} className='btn btn--primary'>
                      {o.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
