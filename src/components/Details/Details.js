import React from 'react';
import './Details.css';
const Details = ({ name, runtime, genres, image, premiered, summary }) => {
  return (
    <div className="details-container">
      <section className="text-section">
        <h2 style={{ fontSize: 'xx-large', margin: '2rem' }}>{name}</h2>
        <div className="text-sub">
          <p className="runtime">{runtime} min</p>
          <p className="genre-section">
            {genres &&
              genres.map((genre, index) => {
                return (
                  <span>
                    {index > 0 && <span>,</span>}
                    <span key={index}> {genre}</span>
                  </span>
                );
              })}
          </p>
        </div>
        <p style={{ padding: '2rem', color: 'rgb(80, 77, 77)' }}>{summary}</p>
      </section>
      <section className="image-section">
        {image && (
          <img className="details-image" src={image.original} alt={name}></img>
        )}
      </section>
    </div>
  );
};

export default Details;
