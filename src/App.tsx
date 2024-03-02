import React from 'react';

import './App.css';
import PhotoContainer from './PhotoContainer/PhotoContainer';
import dataImage from './data.json';

const urlsImage: string[] = [];

dataImage.map(item => {
  urlsImage.push(item.urls.small);
});

const App = () => {
  return (
    <div className="App">
      <PhotoContainer urls={urlsImage} />
    </div>
  );
}

export { App };
