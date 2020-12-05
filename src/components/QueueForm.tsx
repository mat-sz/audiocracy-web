import React, { useCallback, useState } from 'react';

export const QueueForm: React.FC = () => {
  const [url, setUrl] = useState('');

  const submit = useCallback(() => {
    if (url === '') return;

    setUrl('');
  }, [url, setUrl]);

  return (
    <div className="queue-form flex-form">
      <input
        type="text"
        onChange={e => setUrl(e.target.value)}
        value={url}
        placeholder="URL or search query"
        onKeyPress={event => {
          if (event.key === 'Enter') {
            submit();
          }
        }}
      />
      <button onClick={submit}>Add to queue</button>
    </div>
  );
};

export default QueueForm;
