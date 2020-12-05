import React from 'react';
import './App.scss';

import NowPlaying from './components/NowPlaying';
import Queue from './components/Queue';
import Status from './components/Status';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Status />
      <NowPlaying />
      <Queue />
    </div>
  );
};
