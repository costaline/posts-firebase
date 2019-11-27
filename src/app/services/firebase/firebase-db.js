import axios from "axios";

const firebaseDB = axios.create({
  baseURL: "https://posts-firebase.firebaseio.com/"
});

export const firebaseDBGetPosts = async () => {
  const response = await firebaseDB.get("/posts.json");

  if (response.statusText !== "OK") {
    throw new Error(response.status);
  }

  const posts = Object.keys(response.data).map((key) => {
    return {
      id: key,
      title: response.data[key].title,
      body: response.data[key].body,
      date: response.data[key].date,
      user_id: response.data[key].user_id,
      email: response.data[key].email
    };
  });

  return posts;
};

export const firebaseDBSendPost = async (post) => {
  const data = { ...post, date: Date.now() };

  const response = await firebaseDB.post("/posts.json", data);

  if (response.statusText !== "OK") {
    throw new Error(response.status);
  }

  return response;
};

export const firebaseDBGetPost = async (id) => {
  const response = await firebaseDB.get(`/posts/${id}.json`);

  if (response.statusText !== "OK") {
    throw new Error(response.status);
  }

  return response.data;
};

export const firebaseDBDeletePost = async (id) => {
  const response = await firebaseDB.delete(`/posts/${id}.json`);

  if (response.statusText !== "OK") {
    throw new Error(response.status);
  }

  return response;
};

export const firebaseDBEditPost = async (id, data) => {
  const response = await firebaseDB.patch(`/posts/${id}.json`, data);

  if (response.statusText !== "OK") {
    throw new Error(response.status);
  }

  return response;
};
