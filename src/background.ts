const consoleStyles = `
  color: #fff;
  background-color: #7070B8;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 15px;
`;

chrome.runtime.onMessage.addListener((req) => {
  console.log(`%cPoints Collector Initialized`, consoleStyles);
});
