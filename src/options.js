// SAVE OPTIONS
function save_options(e) {
  console.log('omg hello');
  console.log(e);

  // var color = document.getElementById('color').value;
  // var likesColor = document.getElementById('like').checked;
  // // grab value of text field


  // chrome.storage.sync.set({
  //   favoriteColor: color,
  //   likesColor: likesColor
  // }, function() {
  //   // Update status to let user know options were saved.
  //   var status = document.getElementById('status');
  //   status.textContent = 'Options saved.';
  //   setTimeout(function() {
  //     status.textContent = '';
  //   }, 750);
  // });
}

document.getElementById('add-btn').addEventListener('click', save_options);
