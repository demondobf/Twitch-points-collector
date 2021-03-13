import * as React from 'react';

import Header from './components/Header/Header';
import Toggler from './components/Toggler/Toggler';
import Summary from './components/Summary/Summary';

const App = () => {
  const [points] = React.useState(0);

  return (
    <main className="app">
      <Header text="Twitch Points Collector" />
      <Toggler />
      <Summary points={points} />
    </main>
  );
};

export default App;
