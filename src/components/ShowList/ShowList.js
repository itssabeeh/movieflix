import React, { useState } from 'react';
import SingleShow from '../SingleShow/SingleShow';
import './ShowList.css';
const ShowList = ({ showlists }) => {
  const [showlist, setshowlist] = useState();
  const [page, setPage] = useState(1);
  return (
    <div className="body-container">
      <h1 style={{ textAlign: 'center', paddingTop: 'rem' }}>STREAMING NOW</h1>
      <div className="card-container">
        {showlists &&
          showlists.map((show) => {
            const { id, name, genres, rating, weight, image, premiered } = show;
            return <SingleShow key={id} {...show} />;
          })}
      </div>
    </div>
  );
};

export default ShowList;
