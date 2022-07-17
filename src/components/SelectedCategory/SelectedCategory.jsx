import React from 'react';
import { useSelector } from 'react-redux';
import stringToColor from 'string-to-color';

import './SelectedCategory.scss';

const SelectedCategory = () => {
  const { selectedCategory } = useSelector(state => state.jokes);

  return (
    <div
      className="selected-category"
      style={{ backgroundColor: stringToColor(selectedCategory) }}
    >
      {selectedCategory} jokes
    </div>
  );
};

export default SelectedCategory;
