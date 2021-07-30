import React from 'react';
import { useFetch } from '../../api/useFetch';
import './Cast.css';
const url = 'https://api.tvmaze.com/shows/';
const Cast = ({ id }) => {
  const { data: casts } = useFetch(`${url}${id}/cast`);
  return (
    <div class="cast-container">
      <h3 style={{ textAlign: 'center', margin: '2rem', fontSize: 'x-large' }}>
        Cast<span style={{ color: 'purple' }}>Info</span>
      </h3>
      <div class="cast-list">
        {casts.data &&
          casts.data.map((cast) => {
            const { person, character } = cast;
            return (
              <div key={id} className="cast-item">
                {person && person.image && person.image.medium && (
                  <img
                    className="cast-image"
                    src={person.image.medium}
                    alt="image not available"
                  ></img>
                )}
                {person && person.name && character && character.name && (
                  <div className="cast-text">
                    <p>{person.name}</p>
                    <p>As</p>
                    <p>{character.name}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cast;
