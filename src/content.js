// get the URL of current tab
const url = new URL(window.location.href);
console.log("url: ", url);

// create a function to check postattendee case
const isPostAttendee = () => (url.pathname.startsWith('/postattendee'));

// create a function to check web client leave case
const isWebClientLeave = () => (url.pathname.startsWith('/wc/leave'));

// create a function to check success case
const isSuccessful = () => (url.searchParams.get('status') === 'success' || 
                            (url.hash && url.hash.includes('success')));

// function checkMatchesAndSendMessage
const checkMatchesAndSendMessage = () => {
  if (isSuccessful() || isWebClientLeave() || isPostAttendee()) {
    console.log('met one of our cases');
    // if yes, then send message to background.js
    chrome.runtime.sendMessage({ shouldCloseTab: true });
  }
}

checkMatchesAndSendMessage();

// set timeout (checkMatchesAndSendMessage, 3000ms)

