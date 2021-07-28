import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import './Navbar.css';
const Navbar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm(e.target.value);
  };
  return (
    <navbar className="navcontainer">
      <Link style={{ textDecoration: 'none' }} to="/">
        <h1>MovieFlix</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          name="name"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <Link to="/search">
          <button className="btn-search" type="submit">
            Search
          </button>
        </Link>
      </form>
    </navbar>
  );
};

export default Navbar;
