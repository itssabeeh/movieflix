import React, { useState } from 'react';
import { useFetch } from '../../api/useFetch';
import './Cast.css';
const url = 'https://api.tvmaze.com/shows/';
const Crew = ({ id }) => {
  const { data: crew } = useFetch(`${url}${id}/crew`);
  return (
    <div class="cast-container">
      <h3 style={{ textAlign: 'center', margin: '2rem', fontSize: 'x-large' }}>
        Crew<span style={{ color: 'purple' }}>Info</span>
      </h3>
      <div class="cast-list">
        {crew.data &&
          crew.data.map((crewItem) => {
            const { type, person } = crewItem;
            return (
              <div key={id} className="cast-item">
                {person && person.image && person.image.medium && (
                  <img
                    className="cast-image"
                    src={person.image.medium}
                    alt="image not available"
                  ></img>
                )}
                {person && person.name && type && (
                  <div className="cast-text">
                    <p>{person.name}</p>
                    <p>As</p>
                    <p>{type}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Crew;
