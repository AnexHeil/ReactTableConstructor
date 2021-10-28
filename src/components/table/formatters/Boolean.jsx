import React from 'react';

const BooleanFormatter = ({ key, row }) => {
  return row[key] ? '+' : '-';
};

export default BooleanFormatter;