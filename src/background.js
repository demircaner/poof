// Set up the listener for the upcoming message,sender from the content.js
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.shouldCloseTab) {
    // if message is true then close current tab by referencing to sender id
    chrome.tabs.remove(sender.tab.id);
  }
})

// set up listener for 