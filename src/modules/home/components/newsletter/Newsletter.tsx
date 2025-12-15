import React from 'react';

import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return (
    <section className="newsletter padding-top padding-bottom  bg-color">
      <div className="container">
        <div
          className="newsletter__wrapper"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="newsletter__content">
            <h2 className="newsletter__title">Subscribe To The Newsletter</h2>
            <p className="newsletter__description">
              Join our subscribers list to get the latest news, updates and
              special offers delivered directly to your inbox.
            </p>
            <NewsletterForm />
          </div>
          <div className="newsletter__image">{/* image include in css */}</div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
