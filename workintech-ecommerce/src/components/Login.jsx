import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { loginThunk } from "../actions/clientThunks";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: { email: "", password: "", rememberMe: false },
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await dispatch(
        loginThunk({
          email: data.email,
          password: data.password,
          rememberMe: data.rememberMe,
        })
      );

      const backTo = location?.state?.from || "/";
      history.push(backTo);
    } catch (e) {
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Login failed.";
      toast.error(msg);
      setError("root", { type: "server", message: msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="w-full">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Log In</h1>
        <p className="text-gray-600 mt-2">
          Log in to your account and start shopping with us.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Field label="Email" error={errors.email?.message}>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
              })}
            />
          </Field>

          <Field label="Password" error={errors.password?.message}>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
              {...register("password", { required: "Password is required" })}
            />
          </Field>

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" {...register("rememberMe")} />
            Remember Me
          </label>

          {errors.root?.message && (
            <div className="p-3 rounded bg-red-50 text-red-700 text-sm">
              {errors.root.message}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded font-bold py-3 text-white bg-[#23A6F0] disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {submitting && (
              <span className="inline-block w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            )}
            Log In
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          Test users (password: <b>123456</b>):{" "}
          <span className="block">customer@commerce.com</span>
          <span className="block">store@commerce.com</span>
          <span className="block">admin@commerce.com</span>
        </div>
      </div>
    </main>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1">{label}</label>
      {children}
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
