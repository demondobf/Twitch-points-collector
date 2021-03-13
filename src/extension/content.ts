import Logger from '../utils/Logger';

const targetNodeSelector = '[data-test-selector="chat-room-component-layout"] .chat-input';
const buttonNodeSelector = '[data-test-selector="community-points-summary"] .tw-button--success';

const targetNode = document.querySelector<HTMLElement>(targetNodeSelector);

const observerOptions = {
  childList: true,
  subtree: true,
};

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
  Logger.log('Initialized Points Collector');
  observer.observe(targetNode, observerOptions);
} else {
  Logger.error("Couldn't initialize Points Collector");
}
