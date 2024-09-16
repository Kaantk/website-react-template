import classNames from "classnames";
import { Checkbox, Label } from "flowbite-react";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast, ToastContainer } from "react-toastify";
import { login } from "~/services/auth";
import { UserLoginForm } from "~/validation/UserLoginForm";

export const UserLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values) => {
    setLoading(true); // istek sonuclanana kadar true durumunda kalir

    try {
      const result = await login(values.email, values.password); // Giris fonksiyonu cagrilir

      console.log(result.data); // Başarılı girişte veri loglanır

      toast.success("Başarıyla giriş yaptınız!", {
        position: "top-right",
        autoClose: 3000, // 3 saniye sonra otomatik kapanır
      });

      setLoading(false);
    } catch (error) {
      toast.error("Kullanıcı adı veya şifre hatalı, lütfen kontrol ediniz. !", {
        position: "top-right",
        autoClose: 3000,
      });

      setLoading(false);
      return error;
    }
  };

  return (
    <>
      <div className="h-full w-full">
        <div className="h-full flex items-center justify-center w-full">
          <div className="w-11/12 md:w-2/3 lg:w-5/12 p-10 border border-gray-100 rounded bg-white shadow-lg">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={UserLoginForm}
              onSubmit={handleLogin}
            >
              {({
                handleSubmit,
                handleChange,
                values,
                errors,
                touched,
                isValid,
                dirty,
              }) => (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 w-full text-xs"
                >
                  <div>
                    <div className="mb-8">
                      <h4 className="text-3xl font-semibold mb-2">Giriş Yap</h4>
                      <span className="text-sm">
                        Henüz bir hesabın yok mu?{" "}
                        <Link
                          to={"/register"}
                          className="text-blue-600 underline"
                        >
                          Kayıt ol
                        </Link>
                      </span>
                    </div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="E-mail" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="mail giriniz..."
                      className="w-full rounded-sm border-gray-300"
                      onChange={handleChange}
                      value={values.email}
                      required
                      color={
                        errors.email && touched.email ? "failure" : "default"
                      }
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Şifre" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="şifre giriniz..."
                      className="w-full rounded-sm border-gray-300"
                      onChange={handleChange}
                      value={values.password}
                      required
                      color={
                        errors.password && touched.password
                          ? "failure"
                          : "default"
                      }
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-500 text-xs">{errors.password}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Beni hatırla</Label>
                    </div>
                    <div>
                      <a href="#">
                        <b className="underline">Şifremi unuttum</b>
                      </a>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!(isValid && dirty)} // form valid değilse veya formda değişiklik yapılmadıysa disable et
                    className={classNames(
                      "py-2 px-4 rounded text-base text-white", // Sabit sınıflar
                      {
                        "bg-blue-600 hover:bg-blue-500": isValid && dirty, // Valid ve dirty ise yeşil
                        "bg-gray-300 cursor-not-allowed": !(isValid && dirty), // Değilse gri ve cursor kapalı
                      }
                    )}
                  >
                    {loading ? (
                      <ClipLoader
                        color="white"
                        loading={loading}
                        size={22}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      "Giriş Yap"
                    )}
                  </button>
                  <ToastContainer />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
