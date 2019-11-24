import axios from "axios";

const apiKey = "AIzaSyAg2pb0vesAy7SzHfAzl41Bw0krQB_tKKM";

const firebaseAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/"
});

const firebaseAuthSignUp = async (authData) => {
  return await firebaseAuth.post(`/accounts:signUp?key=${apiKey}`, authData);
};

const firebaseAuthSignIn = async (authData) => {
  return await firebaseAuth.post(
    `/accounts:signInWithPassword?key=${apiKey}`,
    authData
  );
};

export { firebaseAuthSignUp, firebaseAuthSignIn };
