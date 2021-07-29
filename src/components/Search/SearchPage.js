import React from 'react';
import { useGlobalContext } from '../context';
import SingleShow from '../SingleShow/SingleShow';
import './Search.css';

const SearchPage = () => {
  const { searchResult } = useGlobalContext();
  return (
    <div className="search-container">
      {searchResult.map((item) => {
        const { id, name, genres, rating, weight, image, premiered } =
          item.show;

        return <SingleShow key={id} {...item.show} />;
      })}
    </div>
  );
};

export default SearchPage;
