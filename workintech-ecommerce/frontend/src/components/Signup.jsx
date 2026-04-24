import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchRolesIfNeeded } from "../actions/clientThunks";
import { useHistory } from "react-router-dom";

const pwdRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

const trPhoneRegex =
  /^(?:\+90|0)?5\d{9}$/;

const ibanRegex =
  /^TR\d{24}$/i;

const taxRegex =
  /^T\d{10}$/i;

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const roles = useSelector((s) => s.client.roles) || [];

  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
      role_id: "",
      store_name: "",
      store_phone: "",
      store_tax_no: "",
      store_bank_account: "",
    },
    mode: "onBlur",
  });

  const roleId = watch("role_id");
  const password = watch("password");

  const selectedRole = useMemo(() => {
    if (!roleId) return null;
    return roles.find((r) => String(r.id) === String(roleId));
  }, [roles, roleId]);

  const isStore = useMemo(() => {
    const label = String(selectedRole?.name || selectedRole?.code || "").toLowerCase();
    return label.includes("store");
  }, [selectedRole]);

  useEffect(() => {
    dispatch(fetchRolesIfNeeded());
  }, [dispatch]);

  useEffect(() => {
    if (roles.length === 0) return;
    const customer = roles.find((r) =>
      String(r.name || r.code || "").toLowerCase().includes("customer")
    );
  }, [roles]);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: Number(data.role_id),
      };

      if (isStore) {
        payload.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
      }

      await api.post("/signup", payload);

      alert('You need to click link in email to activate your account!');
      history.goBack();
    } catch (e) {
      const msg =
        e?.response?.data?.message ||
        e?.response?.data?.error ||
        "Signup failed.";
      setError("root", { type: "server", message: msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="w-full">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-600 mt-2">Create an account to continue.</p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <Field label="Name" error={errors.name?.message}>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Min 3 characters" },
              })}
            />
          </Field>

          {/* Email */}
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

          {/* Password */}
          <Field label="Password" error={errors.password?.message}>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
              {...register("password", {
                required: "Password is required",
                validate: (v) =>
                  pwdRegex.test(v) ||
                  "Min 8 chars incl. number, lower, upper, special",
              })}
            />
          </Field>

          {/* Confirm Password */}
          <Field label="Confirm Password" error={errors.password2?.message}>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
              {...register("password2", {
                required: "Confirm password is required",
                validate: (v) => v === password || "Passwords must match",
              })}
            />
          </Field>

          {/* Role */}
          <Field label="Role" error={errors.role_id?.message}>
            <select
              className="w-full border border-[#ECECEC] rounded px-3 py-2 bg-white"
              {...register("role_id", { required: "Role is required" })}
              defaultValue=""
            >
              {/* Customer default seçimi için roles gelince JS ile setValue kullanabilirsin;
                  burada basit bıraktım: kullanıcı seçer. */}
              <option value="" disabled>
                Select role
              </option>
              {roles.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name || r.code || `role-${r.id}`}
                </option>
              ))}
            </select>
          </Field>

          {/* Store fields */}
          {isStore && (
            <div className="border border-[#ECECEC] rounded p-4 space-y-4">
              <h3 className="font-bold">Store Information</h3>

              <Field label="Store Name" error={errors.store_name?.message}>
                <input
                  type="text"
                  placeholder="Store name"
                  className="w-full border border-[#ECECEC] rounded px-3 py-2"
                  {...register("store_name", {
                    required: "Store name is required",
                    minLength: { value: 3, message: "Min 3 characters" },
                  })}
                />
              </Field>

              <Field label="Store Phone" error={errors.store_phone?.message}>
                <input
                  type="text"
                  placeholder="05xxxxxxxxx or +905xxxxxxxxx"
                  className="w-full border border-[#ECECEC] rounded px-3 py-2"
                  {...register("store_phone", {
                    required: "Phone is required",
                    validate: (v) =>
                      trPhoneRegex.test(String(v).replace(/\s+/g, "")) ||
                      "Invalid Türkiye phone number",
                  })}
                />
              </Field>

              <Field label="Store Tax ID" error={errors.store_tax_no?.message}>
                <input
                  type="text"
                  placeholder="TXXXXXXXXXX"
                  className="w-full border border-[#ECECEC] rounded px-3 py-2"
                  {...register("store_tax_no", {
                    required: "Tax no is required",
                    validate: (v) =>
                      taxRegex.test(String(v).trim()) ||
                      "Must match TXXXXXXXXXX (10 digits)",
                  })}
                />
              </Field>

              <Field
                label="Store Bank Account (IBAN)"
                error={errors.store_bank_account?.message}
              >
                <input
                  type="text"
                  placeholder="TR000000000000000000000000"
                  className="w-full border border-[#ECECEC] rounded px-3 py-2"
                  {...register("store_bank_account", {
                    required: "IBAN is required",
                    validate: (v) =>
                      ibanRegex.test(String(v).replace(/\s+/g, "")) ||
                      "Invalid IBAN (TR + 24 digits)",
                  })}
                />
              </Field>
            </div>
          )}

          {/* Server error */}
          {errors.root?.message && (
            <div className="p-3 rounded bg-red-50 text-red-700 text-sm">
              {errors.root.message}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded font-bold py-3 text-white bg-[#23A6F0] disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {submitting && (
              <span className="inline-block w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            )}
            Sign Up
          </button>
        </form>
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


