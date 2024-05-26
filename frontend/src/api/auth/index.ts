import axios from "axios";

export type RegisterUser = {
  username: string;
  email: string;
  password: string;
};

export type LoginUser = {
  username: string;
  password: string;
};

export const registerUser = async (user: RegisterUser) => {
  const response = await axios.post(
    "http://localhost:8000/api/auth/register",
    user
  );

  return response.data;
};

export const loginUser = async (user: LoginUser) => {
  console.log("the user is: ", user);
  const response = await axios.post(
    "http://localhost:8000/api/auth/login",
    user
  );

  console.log("the response is: ", response.data);

  return response.data;
};
