const savePoints = (points: number) => {
  chrome.storage.local.set({ points });
};

export default savePoints;
