import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCaretDown,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import './Header.scss';

const Header = () => {
  const [isHeaderLinksVisible, setIsHeaderLinksVisible] = useState(false);

  useEffect(() => {
    const onWindowResize = () => {
      if (window.innerWidth >= 720) {
        setIsHeaderLinksVisible(true);
      } else {
        setIsHeaderLinksVisible(false);
      }
    };

    window.addEventListener('resize', () => onWindowResize);

    return window.removeEventListener('resize', onWindowResize);
  }, []);

  const headaerLinksClassname = classnames('header__links', {
    'header__links--visible': isHeaderLinksVisible,
  });

  return (
    <header className="header">
      <div className="header__bars-container">
        <FontAwesomeIcon
          icon={isHeaderLinksVisible ? faXmark : faBars}
          className="header__bars"
          onClick={() => setIsHeaderLinksVisible(!isHeaderLinksVisible)}
        />
      </div>
      <ul className={headaerLinksClassname}>
        <li>SO FUNKTIONIERT'S</li>
        <li>SONDERANGEBOTE</li>
        <li className="header__dropdown">
          <FontAwesomeIcon icon={faUser} />
          <span className="header__dropdown-text">MEIN BEREICH</span>
          <FontAwesomeIcon className="header__caret-down" icon={faCaretDown} />
          <div className="header__dropdown-content">
            <div>My published jokes</div>
            <div>My saved jokes</div>
            <div>Account Information</div>
            <div>Publish new joke</div>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
