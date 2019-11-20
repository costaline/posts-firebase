import axios from "axios";

const firebaseDB = axios.create({
  baseURL: "https://posts-firebase.firebaseio.com/"
});

export const firebaseDBGetPosts = async () => {
  const response = await firebaseDB.get("/posts.json");

  if (response.statusText !== "OK") {
    throw new Error(response.status);
  }

  return response;
};
