import Logger from '../../utils/Logger';
import { buttonNodeSelector } from './constants';

const handleInitSuccess = (targetNode: HTMLElement) => {
  Logger.log('Initialized Points Collector');

  let isButtonDiscovered = false;

  const observer = new MutationObserver(() => {
    if (!isButtonDiscovered) {
      const buttonNode = targetNode.querySelector<HTMLButtonElement>(buttonNodeSelector);

      if (buttonNode) {
        isButtonDiscovered = true;
        buttonNode.click();
        isButtonDiscovered = false;

        Logger.log('50 points collected');
        chrome.runtime.sendMessage({ type: 'POINTS_COLLECTED' });
      }
    }
  });

  observer.observe(targetNode, {
    childList: true,
    subtree: true,
  });
};

export default handleInitSuccess;
