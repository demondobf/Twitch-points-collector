import * as React from 'react';
import './Toggler.css';

const Toggler = () => {
  const [isToggled, setToggled] = React.useState(false);

  const handleClick = () => {
    setToggled((prev) => !prev);
    chrome.runtime.sendMessage('Toggle');
  };

  return (
    <button className="toggler" onClick={handleClick}>
      {isToggled ? 'Stop' : 'Start'}
    </button>
  );
};

export default Toggler;
