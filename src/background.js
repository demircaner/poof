// Set up the listener for the upcoming message,sender from the content.js
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.shouldCloseTab) {
    // if message is true then close current tab by referencing to sender id
    // will close window if only one tab open
    // ISSUE: brings focus back to browser when it closes (instead of staying on Zoom)
    chrome.tabs.remove(sender.tab.id);
  }
})

// set up listener for browser action click
// open options page (embedded or new tab) that allows user to add a new urlPrefix (pre-populated with current tab's url)
// when user clicks save, it pushes url to a urlPrefix array stored in chrome.storage
// so now content.js should check for matches in that array