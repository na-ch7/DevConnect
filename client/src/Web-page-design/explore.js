// Get all elements with the class "Likebutton"
const likeButtons = document.querySelectorAll('.Likebutton');

// Add an event listener to each button
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the current image source
    const currentSrc = button.querySelector('img').src;

    // Toggle the image source
    if (currentSrc.includes('black_bulb')) {
      button.querySelector('img').src = 'yellow_bulb-removebg-preview.png';
    } else {
      button.querySelector('img').src = 'black_bulb-removebg-preview.png';
    }
  });
});

const Jointeam = document.querySelectorAll('.Jointeam');

// Add an event listener to each button
Jointeam.forEach(button => {
  button.addEventListener('click', () => {
    // Get the current image source
    const currentSrcc = button.querySelector('img').src;

    // Toggle the image source
    if (currentSrcc.includes('JOIN_TEAM-removebg-preview.png')) {
      button.querySelector('img').src = 'REQUEST_SENT-removebg-preview.png';
    } else {
      button.querySelector('img').src = 'JOIN_TEAM-removebg-preview.png';
    }
  });
});