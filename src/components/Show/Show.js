import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Details/Details';
import { useFetch } from '../../api/useFetch';
import './Show.css';
import Episodes from '../Episodes/Episodes';
import Cast from '../Cast/Cast';
import Crew from '../Cast/Crew';
const urlid = 'https://api.tvmaze.com/shows/';

const Show = () => {
  const { id } = useParams();
  const { data: showdata } = useFetch(`${urlid}${id}`);
  const [isShowDetails, setIsShowDetails] = useState(true);
  const [isShowEpisodes, setIsShowEpisodes] = useState(false);
  const [isShowCast, setIsShowCast] = useState(false);
  const [isShowCrew, setIsShowCrew] = useState(false);
  const detailsRef = useRef(null);
  const episodesRef = useRef(null);
  const castRef = useRef(null);
  const crewRef = useRef(null);

  const handleDetails = () => {
    if (!isShowDetails) {
      setIsShowDetails(true);
      setIsShowEpisodes(false);
      setIsShowCast(false);
      setIsShowCrew(false);
      detailsRef.current.style.background = '#551a8b';
      episodesRef.current.style.background = '#141414';
      castRef.current.style.background = '#141414';
      crewRef.current.style.background = '#141414';
    }
  };
  const handleEpsiodes = () => {
    if (!isShowEpisodes) {
      setIsShowDetails(false);
      setIsShowCrew(false);
      setIsShowCast(false);
      setIsShowEpisodes(true);
      episodesRef.current.style.background = '#551a8b';
      detailsRef.current.style.background = '#141414';
      castRef.current.style.background = '#141414';
      crewRef.current.style.background = '#141414';
    }
  };
  const handleCast = () => {
    if (!isShowCast) {
      setIsShowDetails(false);
      setIsShowEpisodes(false);
      setIsShowCrew(false);
      setIsShowCast(true);
      castRef.current.style.background = '#551a8b';
      detailsRef.current.style.background = '#141414';
      episodesRef.current.style.background = '#141414';
      crewRef.current.style.background = '#141414';
    }
  };
  const handleCrew = () => {
    if (!isShowCrew) {
      setIsShowDetails(false);
      setIsShowEpisodes(false);
      setIsShowCast(false);
      setIsShowCrew(true);
      crewRef.current.style.background = '#551a8b';
      castRef.current.style.background = '#141414';
      detailsRef.current.style.background = '#141414';
      episodesRef.current.style.background = '#141414';
    }
  };
  return (
    <div className="main-container">
      <div className="btn-container">
        <button
          className="btn details-btn"
          ref={detailsRef}
          onClick={handleDetails}
        >
          Deatils
        </button>
        <button className="btn" ref={episodesRef} onClick={handleEpsiodes}>
          Episode
        </button>
        <button className="btn" ref={castRef} onClick={handleCast}>
          Cast
        </button>
        <button className="btn" ref={crewRef} onClick={handleCrew}>
          Crew
        </button>
      </div>
      <section>{isShowDetails && <Details {...showdata.data} />}</section>
      <section>{isShowEpisodes && <Episodes id={id} />}</section>
      <section>{isShowCast && <Cast id={id} />}</section>
      <section>{isShowCrew && <Crew id={id} />}</section>
    </div>
  );
};

export default Show;
