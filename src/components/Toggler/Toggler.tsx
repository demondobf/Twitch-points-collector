import * as React from 'react';
import './Toggler.css';

const Toggler = () => {
  const [isToggled, setToggled] = React.useState(false);

  const toggle = () => {
    setToggled((prev) => !prev);
    chrome.runtime.sendMessage('Toggle');
  };

  return (
    <button className="toggler" onClick={toggle}>
      {isToggled ? 'Stop' : 'Start'}
    </button>
  );
};

export default Toggler;
