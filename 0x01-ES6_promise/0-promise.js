function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiResponse = { data: 'Sample data from API' };
      resolve(apiResponse);
    }, 1000);
  });
}
export default getResponseFromAPI;
