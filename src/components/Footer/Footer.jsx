import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <p className="footer__text">GOT JOKES? GET PAID FOR SUBMITTING</p>
        <a href="#0" className="button">
          SUBMIT JOKE{' '}
          <FontAwesomeIcon className="button__arrow-icon" icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
