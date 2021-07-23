import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useFetch } from '../../api/useFetch';
import './ShowList.css';
const url = 'https://api.tvmaze.com/shows';
const ShowList = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [shows, setShows] = useState([]);
  // const [isError, setIsError] = useState(false);

  // const fetchShows = async () => {
  //   try {
  //     const showlist = await axios.get(url);
  //     setShows(showlist);
  //     setIsLoading(false);
  //   } catch {
  //     setIsError(true);
  //   }
  // };

  // useEffect(() => {
  //   fetchShows();
  // }, []);
  const { isLoading, data: shows } = useFetch(url);
  const showlists = shows.data;
  console.log(showlists);
  return (
    <div className="body-container">
      <h1 style={{ textAlign: 'center' }}>STREAMING NOW</h1>
      <div className="card-container">
        {showlists &&
          showlists.map((show) => {
            const { id, name, genres, rating, weight, image, premiered } = show;
            return (
              <div key={id} className="cards">
                <img className="show-image" src={image.medium}></img>
                <div className="card-text">
                  <h4 style={{ margin: '.25rem' }}>{name}</h4>
                  <h5 style={{ margin: '0.25rem', color: 'rgb(143, 73, 131)' }}>
                    {premiered}
                  </h5>
                  <div className="show-genres">
                    {genres &&
                      genres.map((genre) => (
                        <div className="genre">{genre}</div>
                      ))}
                  </div>
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
          })}
      </div>
    </div>
  );
};

export default ShowList;
