import React from 'react';

const Status = ({ likes }) => {
  if (likes < 51) {
    return <div className="status status--popular ">POPULAR</div>;
  } else if (likes < 101) {
    return <div className="status status--trending ">TRENDING</div>;
  }

  return <div className="status status--epic ">EPIC</div>;
};

export default Status;
