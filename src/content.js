// get the URL of current tab
const url = new URL(window.location.href);

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
    // if yes, then send message to background.js
    chrome.runtime.sendMessage({ shouldCloseTab: true });
  }
}

checkMatchesAndSendMessage();


