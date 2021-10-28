import React from 'react';

const LinkFormatter = ({ key, row }) => {
  return <a href={row[key]}>{row[key]}</a>
}

export default LinkFormatter;