import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default Home;
