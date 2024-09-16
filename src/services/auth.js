import { apiClient } from "~/API/apiClient";

export const login = async (email, password) => {
  const credentials = { email, password }; // Kullanıcının girdigi email, şifre bilgileri

  // API'den token bilgileri döner, hata olursa yakalanır
  try {
    const response = await apiClient.post("api/auth/login", credentials);
    return response;
  } catch (error) {
    // Hatalı durumda throw ile hata fırlat
    throw error;
  }
};

export const logout = () => {};
