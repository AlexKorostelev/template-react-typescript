import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to="/about">About page</Link>
      <h1>Home</h1>;
    </>
  );
};

export default Home;
