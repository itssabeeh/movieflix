import React from 'react';
import { useGlobalContext } from '../context';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import SingleShow from '../SingleShow/SingleShow';
import './Search.css';

const SearchPage = () => {
  const { searchResult, isLoading, isError } = useGlobalContext();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error msg={'Oops...sometihng went wrong'} />
      ) : (
        <div className="search-container">
          {searchResult &&
            searchResult.map((item) => {
              return <SingleShow key={item.show.id} {...item.show} />;
            })}
        </div>
      )}
    </>
  );
};

export default SearchPage;
