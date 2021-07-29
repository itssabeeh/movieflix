import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import './SingleShow.css';
const SingleShow = ({ id, name, genres, rating, weight, image, premiered }) => {
  return (
    <div key={id} className="cards">
      {image && (
        <img
          className="show-image"
          src={image.medium}
          alt="image not available"
        ></img>
      )}

      <div className="card-text">
        <h4 style={{ margin: '.25rem' }}>{name}</h4>
        <h5 style={{ margin: '0.25rem', color: 'rgb(143, 73, 131)' }}>
          {premiered}
        </h5>
        <div className="show-genres">
          {genres &&
            genres.map((genre, index) => (
              <div key={index} className="genre">
                {genre}
              </div>
            ))}
        </div>
        <Link className="info-btn" to={`/show/${id}`}>
          Show More
        </Link>
      </div>
      <div className="rating">
        <div
          style={{
            color: 'rgb(255, 255, 28)',
            fontSize: 'xx-large',
            marginRight: '.2rem',
          }}
        >
          <AiOutlineStar />
        </div>
        <div>
          <p style={{ fontSize: 'small' }}>{rating.average}/10</p>
          <p>{weight}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleShow;
