import React from 'react';
import {Link} from 'react-router-dom';

const DefaultPage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default DefaultPage;