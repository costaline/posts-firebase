import axios from "axios";

export default axios.create({
  baseURL: "https://posts-firebase.firebaseio.com/"
});
