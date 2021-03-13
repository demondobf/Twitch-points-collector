import { useState } from 'react';

import Summary from './components/Summary/Summary';

const App = () => {
  const [points] = useState(0);

  return (
    <main className="app">
      <Summary points={points} />
    </main>
  );
};

export default App;
