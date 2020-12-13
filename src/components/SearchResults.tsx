import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAction } from '../actions/playback';
import { setSearchResultsAction } from '../actions/state';
import { StateType } from '../reducers';
import { timeDisplay } from '../Utils';

export const SearchResults: React.FC = () => {
  const searchResults = useSelector((state: StateType) => state.searchResults);
  const dispatch = useDispatch();

  if (!searchResults) {
    return null;
  }

  return (
    <div className="search-results">
      <ul className="queue">
        <li>
          <h2>Search results</h2>
        </li>
        {searchResults.map(item => (
          <li key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <span className="title">
                <a href={item.url}>{item.title}</a>
              </span>
              <span className="author">{item.author}</span>
              <span className="duration">{timeDisplay(item.duration)}</span>
              <button
                onClick={() => {
                  dispatch(addAction(item.url));
                  dispatch(setSearchResultsAction(undefined));
                }}
              >
                Add to queue
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
