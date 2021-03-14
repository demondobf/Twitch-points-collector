import { useEffect, useState } from 'react';

import Summary from './components/Summary/Summary';

const App = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    chrome.runtime.sendMessage({ type: 'REQ_POINTS_STATUS' });

    chrome.runtime.onMessage.addListener((message: MessageType) => {
      if (message.type === 'POINTS_STATUS') {
        setPoints(message.amount);
      }
    });
  }, []);

  return (
    <main className="app">
      <Summary points={points} />
    </main>
  );
};

export default App;
