//URL改变监听
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.active) {
    chrome.tabs.sendMessage(tabId, {
      action: "urlUpdate",
      url: changeInfo.url
    });
  }
});