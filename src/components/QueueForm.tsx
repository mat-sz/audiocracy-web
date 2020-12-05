import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAction } from '../actions/playback';

export const QueueForm: React.FC = () => {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  const submit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (url === '') return;
      dispatch(addAction(url));
      setUrl('');
    },
    [url, setUrl, dispatch]
  );

  return (
    <div className="queue-form flex-form">
      <form onSubmit={submit}>
        <input
          type="text"
          onChange={e => setUrl(e.target.value)}
          value={url}
          placeholder="URL or search query"
        />
        <button type="submit">Add to queue</button>
      </form>
    </div>
  );
};

export default QueueForm;
