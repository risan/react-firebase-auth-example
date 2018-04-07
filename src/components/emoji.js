import React from 'react';

const Emoji = ({ value = null, label = 'emoji', children }) => (
  <span role="img" aria-label={label}>
    {value ? value : children}
  </span>
);

export default Emoji;
