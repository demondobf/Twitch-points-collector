import Logger from '../../utils/Logger';
import { targetNodeSelector, buttonNodeSelector } from './constants';

const targetNode = document.querySelector<HTMLElement>(targetNodeSelector);

targetNode ? handleSuccess() : handleFailure();

function handleSuccess() {
  Logger.log('Initialized Points Collector');

  let isButtonDiscovered = false;

  const observer = new MutationObserver(() => {
    if (!isButtonDiscovered) {
      const buttonNode = targetNode?.querySelector<HTMLButtonElement>(buttonNodeSelector);

      if (buttonNode) {
        isButtonDiscovered = true;
        buttonNode.click();
        Logger.log('50 points collected');
      }

      isButtonDiscovered = false;
    }
  });

  if (targetNode) {
    observer.observe(targetNode, {
      childList: true,
      subtree: true,
    });
  }
}

function handleFailure() {
  Logger.error("Couldn't initialize Points Collector");
}
