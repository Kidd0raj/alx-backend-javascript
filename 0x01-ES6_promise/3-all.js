// main.js

import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  // Use Promise.all to collectively resolve all promises
  Promise.all([uploadPhoto(), createUser()])
    .then(results => {
      // Extract the firstName and lastName from the resolved promises
      const [photoResponse, userResponse] = results;
      const { body: photoBody } = photoResponse;
      const { firstName, lastName } = userResponse;

      // Log the combined information to the console
      console.log(`Body: ${photoBody}, firstName: ${firstName}, lastName: ${lastName}`);
    })
    .catch(error => {
      // Log an error message in case of any errors
      console.error('Signup system offline');
    });
}

// Call the handleProfileSignup function
handleProfileSignup();
