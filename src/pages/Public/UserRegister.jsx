import classNames from "classnames";
import { Label } from "flowbite-react";
import { Formik } from "formik";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { toast, ToastContainer } from "react-toastify";
import { login } from "~/services/auth";
import { UserRegisterForm } from "~/validation/UserRegisterForm";

export const UserRegister = () => {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values) => {
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
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={UserRegisterForm}
              onSubmit={handleRegister}
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
                    <div className="mb-5">
                      <h4 className="text-3xl font-semibold mb-2">Kayıt Ol</h4>
                    </div>
                  </div>

                  {/* Ad - input */}
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="firstName" value="Ad" />
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="isim giriniz..."
                      className="w-full rounded-sm border-gray-300"
                      onChange={handleChange}
                      value={values.firstName}
                      required
                      color={
                        errors.email && touched.email ? "failure" : "default"
                      }
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="text-red-500 text-xs">{errors.firstName}</p>
                    )}
                  </div>

                  {/* Soyad - input */}
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="lastName" value="Soyad" />
                    </div>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="soyad giriniz..."
                      className="w-full rounded-sm border-gray-300"
                      onChange={handleChange}
                      value={values.lastName}
                      required
                      color={
                        errors.lastName && touched.lastName
                          ? "failure"
                          : "default"
                      }
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="text-red-500 text-xs">{errors.lastName}</p>
                    )}
                  </div>

                  {/* Email - input */}
                  <div>
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

                  {/* Sifre - input */}
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

                  {/* Form submit button */}
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
                      "Üye Ol"
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
