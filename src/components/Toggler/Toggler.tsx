import { useState } from 'react';
import './Toggler.css';

const Toggler = () => {
  const [isToggled, setToggled] = useState(false);

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
