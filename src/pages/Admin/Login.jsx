import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Formik } from "formik";
import { AdminLoginForm } from "~/validation/AdminLoginForm";
import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "~/API/loginAdmin";
import ClipLoader from "react-spinners/ClipLoader";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    console.log(values);
    setLoading(true);
    setError(null);
    try {
      const userData = await loginAdmin(values); // loginUser yerine loginAdmin kullan
      // Giriş başarılı, yönlendirme yapın
      navigate("/dashboard"); // Dashboard gibi bir sayfaya yönlendirme
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-gray-100">
      <header className="fixed top-0 left-0 w-full border-b border-gray-200 shadow-sm bg-white">
        <section className="w-full flex justify-center p-3">
          <h1>
            Admin Panel - <b>Giriş Yap</b>
          </h1>
        </section>
      </header>
      <div className="w-4/5 md:w-1/2 lg:w-1/4">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={AdminLoginForm}
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
                <div className="mb-2 block">
                  <Label htmlFor="email" value="E-mail" />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Lütfen mail giriniz"
                  onChange={handleChange}
                  value={values.email}
                  required
                  color={errors.email && touched.email ? "failure" : "default"}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Şifre" />
                </div>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Lütfen şifre giriniz"
                  onChange={handleChange}
                  value={values.password}
                  required
                  color={
                    errors.password && touched.password ? "failure" : "default"
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
              <Button
                type="submit"
                disabled={!(isValid && dirty)} // form valid değilse veya formda değişiklik yapılmadıysa disable et
                className={classNames({ "": isValid && dirty })}
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
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
