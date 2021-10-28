import React from 'react';

const LinkNameFormatter = ({ key, row }) => {
  return <a href={row[key]}>{row.name}</a>
}

export default LinkNameFormatter;