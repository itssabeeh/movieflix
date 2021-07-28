import React from 'react';
import './Details.css';
const Details = ({ name, runtime, genres, image, premiered, summary }) => {
  return (
    <div className="details-container">
      <section className="text-section">
        <h2>{name}</h2>
      </section>
    </div>
  );
};

export default Details;
