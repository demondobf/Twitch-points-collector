import savePoints from './savePoints';
import sendPoints from './sendPoints';

let points = 0;

chrome.storage.local.get('points', (res) => {
  const storedPoints = res['points'];

  if (storedPoints) {
    points = storedPoints;
  }
});

chrome.runtime.onMessage.addListener((message: MessageType) => {
  switch (message.type) {
    case 'POINTS_COLLECTED': {
      points += 50;
      savePoints(points);
      sendPoints(points);
      break;
    }
    case 'REQ_POINTS_STATUS': {
      sendPoints(points);
      break;
    }
    default: {
      break;
    }
  }
});
