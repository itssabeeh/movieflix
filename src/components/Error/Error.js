import React from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
import './Error.css';
const Error = ({ msg }) => {
  return (
    <div className="error-container">
      <AiOutlineWarning />
      <p style={{ marginLeft: '1rem' }}>{msg}</p>
    </div>
  );
};

export default Error;
