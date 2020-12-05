import React from 'react';
import { useSelector } from 'react-redux';

import { StateType } from '../reducers';

const Status: React.FC = () => {
  const connected = useSelector((state: StateType) => state.connected);

  return (
    <>
      <div className="logo section">Audiocracy</div>
      {!connected && <div className="status error">Not connected</div>}
    </>
  );
};

export default Status;
