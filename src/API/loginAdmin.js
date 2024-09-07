import { apiClient } from "./apiClient";

export const loginAdmin = async (credentials) => {
  try {
    const response = await apiClient.post("/login", credentials); // POST isteği ile giriş bilgilerini gönder
    console.log(response.data);
    return response.data; // Giriş başarılıysa veriyi döndür
  } catch (error) {
    console.log("API request failed: " + error);
    throw error; // Hata fırlat, böylece handleLogin'de yakalanabilir
  }
};
