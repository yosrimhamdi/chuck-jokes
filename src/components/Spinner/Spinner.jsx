import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <FontAwesomeIcon className="spinner" icon={faCircleNotch} />
    </div>
  );
};

export default Spinner;
