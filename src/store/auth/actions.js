import axios from "axios";

export const loginUser = async (email, password) => {
  const data = { email, password };
  console.log(data);
  try {
    const response = await axios.post(REACT_APP_TEST_URL, data);

    console.log(
      "İşlem başarılı! Kullanıcı token ve expiration time bilgileri:",
      response.data
    );

    return response.data;
  } catch (error) {
    console.error("Login işlemi başarısız oldu:", error);

    throw error;
  }
};
