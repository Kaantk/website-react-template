import axios from "axios";
import { useDispatch } from "react-redux";
import { _logIn } from "./slice";

export const loginUser = async (email, password) => {
  const data = { email, password };
  console.log(data);
  try {
    const response = await axios.post(
      "https://localhost:44316/api/auth/login",
      data
    );

    dispatch(_logIn(response.data));
  } catch (error) {
    console.error("Login işlemi başarısız oldu:", error);

    throw error;
  }
};
