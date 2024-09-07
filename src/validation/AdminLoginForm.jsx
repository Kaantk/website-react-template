import * as Yup from "yup";

export const AdminLoginForm = Yup.object({
  email: Yup.string().email("Geçersiz e-mail adresi").required("Zorunlu alan"),
  password: Yup.string()
    .min(6, "En az 6 karakter giriniz")
    .max(15, "En fazla 15 karakter giriniz")
    .required("Zorunlu alan"),
});
