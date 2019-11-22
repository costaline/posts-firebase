import axios from "axios";

const apiKey = "AIzaSyAg2pb0vesAy7SzHfAzl41Bw0krQB_tKKM";

const firebaseAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/"
});

const firebaseAuthSignUp = async (authData) => {
  const response = await firebaseAuth.post(
    `/accounts:signUp?key=${apiKey}`,
    authData
  );

  console.log(response);
};

const firebaseAuthLogIn = async (authData) => {
  const response = await firebaseAuth.post(
    `/accounts:signInWithPassword?key=${apiKey}`,
    authData
  );

  console.log(response);
};

export { firebaseAuthSignUp, firebaseAuthLogIn };
