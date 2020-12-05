import React from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../reducers';

import { timeDisplay } from '../Utils';

export const NowPlaying: React.FC = () => {
  const item = useSelector((state: StateType) => state.current);
  const time = useSelector((state: StateType) => state.time);

  if (!item) {
    return (
      <div className="now-playing section">
        <h3>Now playing</h3>
        <h1>Nothing</h1>
      </div>
    );
  }

  return (
    <div className="now-playing section">
      <h3>Now playing</h3>
      <div className="now-playing-grid">
        <div className="thumbnail">
          <div className="shadow"></div>
          <img src={item.thumbnail} alt={item.title} />
          <span className="duration">
            {timeDisplay(time)} / {timeDisplay(item.duration)}
          </span>
          <div className="progress-bar">
            <div
              style={{
                width: Math.min((time / item.duration) * 100, 100) + '%',
              }}
            ></div>
          </div>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h2>{item.author}</h2>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;