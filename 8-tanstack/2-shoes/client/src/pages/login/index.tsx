import type { FC } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import Input from "../../components/form/input";
import { LOGIN_SCHEMA } from "../../contants/schema";
import { LOGIN_INITIAL_VALUES } from "../../contants";
import type { LoginFormValues } from "../../types";
import { useLogin } from "../../service/auth";

const Login: FC = () => {
  const { isPending, mutate } = useLogin();

  const handleSubmit = (values: LoginFormValues) => {
    mutate(values);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center spacing">
      <div className="sm:mx-auto w-full sm:max-w-md">
        <img src="/logo.svg" alt="logo" className="mx-auto h-10 w-auto" />

        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Oturumunuzu Açın
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <Formik
          initialValues={LOGIN_INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={LOGIN_SCHEMA}
        >
          <Form className="space-y-8">
            <Input label="E-Posta" name="email" type="email" />
            <Input label="Şifre" name="password" type="text" />

            <div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 font-semibold text-white hover:bg-indigo-500 shadow-sm"
              >
                Giriş Yap
              </button>
            </div>
          </Form>
        </Formik>

        <div className="mt-10 text-center text-sm/6 text-gray-500">
          Hesabınız yok mu?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Kayıt Olun
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
