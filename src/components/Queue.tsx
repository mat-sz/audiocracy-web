import React from 'react';
import { useSelector } from 'react-redux';

import QueueForm from './QueueForm';
import { StateType } from '../reducers';
import { timeDisplay } from '../Utils';
import SearchResults from './SearchResults';

export const Queue: React.FC = () => {
  const queue = useSelector((state: StateType) => state.queue);

  return (
    <div className="queue section">
      <h3>Queue</h3>
      <QueueForm />
      <SearchResults />
      <ul>
        {queue.map((item, i) => (
          <li key={i}>
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <span className="title">
                <a href={item.url}>{item.title}</a>
              </span>
              <span className="author">{item.author}</span>
              <span className="duration">{timeDisplay(item.duration)}</span>
            </div>
          </li>
        ))}
      </ul>
      {queue.length === 0 && 'Queue is empty.'}
    </div>
  );
};

export default Queue;
