function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., API call)
    setTimeout(() => {
      const apiResponse = { data: 'Sample data from API' };
      // Assuming the API call was successful, resolve the Promise with the response
      resolve(apiResponse);
    }, 1000); // Simulating a delay of 1 second
  });
}

export default getResponseFromAPI;
