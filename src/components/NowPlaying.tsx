import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downvoteAction } from '../actions/playback';
import { StateType } from '../reducers';

import { timeDisplay } from '../Utils';

export const NowPlaying: React.FC = () => {
  const item = useSelector((state: StateType) => state.current);
  const time = useSelector((state: StateType) => state.time);
  const downvotes = useSelector((state: StateType) => state.downvotes);
  const dispatch = useDispatch();

  const downvote = useCallback(() => {
    dispatch(downvoteAction());
  }, [dispatch]);

  if (!item) {
    return (
      <div className="now-playing section">
        <h3>Now playing</h3>
        <h1>Nothing</h1>
      </div>
    );
  }

  return (
    <>
      <div className="blurred-background">
        <img src={item.thumbnail} alt="" />
      </div>
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
            <div className="downvote">
              <button onClick={downvote}>Downvote ({downvotes})</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NowPlaying;
