import React from 'react';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import SingleShow from '../SingleShow/SingleShow';
import './ShowList.css';
const ShowList = ({ showlists, isLoading, isError }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <div className="body-container">
          <h1 style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            STREAMING NOW
          </h1>

          <div className="card-container">
            {showlists &&
              showlists.map((show) => {
                return <SingleShow key={show.id} {...show} />;
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default ShowList;
