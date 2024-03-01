import React from 'react';

import './App.css';
import PhotoContainer from './PhotoContainer/PhotoContainer';
import dataImage from './data.json'


console.log(dataImage)

const App = () => {

  return (
    <div className="App">
      <PhotoContainer srcImages={dataImage} />
    </div>
  );
}

export { App };
