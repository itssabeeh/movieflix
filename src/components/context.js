import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();
const url = 'https://api.tvmaze.com/search/shows?q=';
const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    try {
      const shows = await axios.get(`${url}${searchTerm}`);
      console.log('shows');
      setSearchResult(shows.data);
      setIsLoading(false);
    } catch {
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [searchTerm]);
  console.log(searchResult);
  return (
    <AppContext.Provider value={{ searchTerm, searchResult, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
