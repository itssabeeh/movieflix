import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Details/Details';
import { useFetch } from '../../api/useFetch';
import './show.css';
const urlid = 'https://api.tvmaze.com/shows/';
const Show = () => {
  const { id } = useParams();
  const { data: showdata } = useFetch(`${urlid}${id}`);
  const [isShowDetails, setIsShowDetails] = useState(true);
  const detailsRef = useRef(null);
  useEffect(() => {
    if (isShowDetails) detailsRef.current.style.background = '#551a8b';
    else detailsRef.current.style.background = '141414';
  }, [isShowDetails]);
  return (
    <div className="main-container">
      <div className="btn-container">
        <button className="btn" ref={detailsRef}>
          Deatils
        </button>
        <button className="btn">Episode</button>
        <button className="btn">Cast</button>
        <button className="btn">Crew</button>
      </div>
      <section>{isShowDetails && <Details {...showdata.data} />}</section>
    </div>
  );
};

export default Show;
