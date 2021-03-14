const sendPoints = (amount: number) => {
  const message: PointsStatus = { type: 'POINTS_STATUS', amount };
  chrome.runtime.sendMessage(message);
};

export default sendPoints;
