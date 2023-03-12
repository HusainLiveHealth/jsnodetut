// Select the search input field
const searchInput = document.getElementById('search');

// Add an event listener to the search input field
searchInput.addEventListener('input', (event) => {
  // Get the user's input value
  const userInput = event.target.value;

  // Define a regular expression pattern to match special characters
  const pattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  // Test if the user's input contains any special characters
  if (pattern.test(userInput)) {
    // If the user's input contains special characters, set the background color of the search input field to red
    event.target.style.backgroundColor = 'red';
  } else {
    // If the user's input does not contain special characters, set the background color of the search input field to its default color
    event.target.style.backgroundColor = '';
  }
});
