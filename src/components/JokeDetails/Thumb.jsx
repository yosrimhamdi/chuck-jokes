import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import './Thumb.scss';
import classNames from 'classnames';

const Thumb = ({ down, count }) => {
  const className = classNames('thumb-container', {
    'down': down,
  });

  return (
    <div className={className}>
      <FontAwesomeIcon
        className="thumb"
        icon={down ? faThumbsDown : faThumbsUp}
      />
      {count}
    </div>
  );
};

export default Thumb;
