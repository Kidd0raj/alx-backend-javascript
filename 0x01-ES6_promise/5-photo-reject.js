export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulating a processing error for demonstration purposes
    const processingError = new Error(`$${fileName} cannot be processed`);
    reject(processingError);
  });
}
