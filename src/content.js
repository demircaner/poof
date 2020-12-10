// get the URL of current tab
const url = new URL(window.location.href);

// // create a function to check postattendee case
// const isPostAttendee = () => (url.pathname.startsWith('/postattendee'));

// // create a function to check web client leave case
// const isWebClientLeave = () => (url.pathname.startsWith('/wc/leave'));

// // create a function to check success case
// const isSuccessful = () => (url.searchParams.get('status') === 'success' || 
//                             (url.hash && url.hash.includes('success')));

const urlPrefixes = ['zoom.us/j/', 'zoom.us/s/', 'zoom.us/postattendee', 'zoom.us/wc/leave', 'prod.liveshare.vsengsaas.visualstudio.com/join'];                            
// check if our href matches any of the prefixes
const matchesUrlPrefix = () => urlPrefixes.some((urlPrefix) => url.href.startsWith(`${url.protocol}//${urlPrefix}`));

/*
            "*://*.zoom.us/j/*",
            "*://*.zoom.us/s/*",
            "*://*.zoom.us/postattendee*",
            "*://*.zoom.us/wc/leave*",
            "*://prod.liveshare.vsengsaas.visualstudio.com/join*"
*/

// function checkMatchesAndSendMessage
// const checkMatchesAndSendMessage = () => {
//   if (isSuccessful() || isWebClientLeave() || isPostAttendee() || matchesUrlPrefix()) {
//     // if yes, then send message to background.js
//     chrome.runtime.sendMessage({ shouldCloseTab: true });
//   }
// }
const checkMatchesAndSendMessage = () => {
  if (matchesUrlPrefix()) {
    // if yes, then send message to background.js
    chrome.runtime.sendMessage({ shouldCloseTab: true });
  }
}

// run after 10 seconds, enough time for user to click confirmation box
setTimeout(checkMatchesAndSendMessage, 7000);


