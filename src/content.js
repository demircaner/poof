// get the URL of current tab
const url = new URL(window.location.href);

// Object instead of Array
// const urlPrefixes = {'zoom.us/j/': true, 'zoom.us/s/': true, 'zoom.us/postattendee': true, 'zoom.us/wc/leave': true, 'prod.liveshare.vsengsaas.visualstudio.com/join': true};                            
// const matchesUrlPrefix = () => (urlPrefixes[/* prefix that matches our current URL */]) ? true : false;

// check if our href matches any of the prefixes
const urlPrefixes = ['zoom.us/j/', 'zoom.us/s/', 'zoom.us/postattendee', 'zoom.us/wc/leave', 'prod.liveshare.vsengsaas.visualstudio.com/join'];                            
const matchesUrlPrefix = () => urlPrefixes.some((urlPrefix) => url.href.startsWith(`${url.protocol}//${urlPrefix}`));

const checkMatchesAndSendMessage = () => {
  if (matchesUrlPrefix()) {
    // if yes, then send message to background.js
    chrome.runtime.sendMessage({ shouldCloseTab: true });
  }
}

// run after a few seconds, enough time for user to click confirmation box
setTimeout(checkMatchesAndSendMessage, 7000);


