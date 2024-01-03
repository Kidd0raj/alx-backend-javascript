import { uploadPhoto, createUser } from "./utils.js";

async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    console.error('Error in asyncUploadUser:', error.message);
    return {
      photo: null,
      user: null
    };
  }
}
