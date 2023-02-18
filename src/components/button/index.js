import React from 'react';

export const Button = ({ click, children, className }) => {
  return (
    <button onClick={click} className={className}>
      {children}
    </button>
  );
};
