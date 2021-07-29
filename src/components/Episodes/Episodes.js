import React from 'react';
import { useFetch } from '../../api/useFetch';
import './Episodes.css';
const urlep = 'https://api.tvmaze.com/shows/';
const Episodes = ({ id }) => {
  const { data: episodes } = useFetch(`${urlep}${id}/episodes`);

  return (
    <div>
      <h3 style={{ textAlign: 'center', margin: '2rem', fontSize: 'x-large' }}>
        Episode<span style={{ color: 'purple' }}>Info</span>
      </h3>
      <div className="episodes">
        <section className="episode-heading">
          <span>Name</span>
          <span>Season</span>
          <span>Time</span>
          <span>Date</span>
        </section>
        {episodes.data &&
          episodes.data.map((episode) => {
            const { id, name, season, runtime, airdate } = episode;
            return (
              <div key={id} className="ep-list">
                <p>{name}</p>
                <p>{season}</p>
                <p>{runtime}</p>
                <p>{airdate}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Episodes;
