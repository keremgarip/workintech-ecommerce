import { useState } from "react";

export default function Signup() {
  const [role, setRole] = useState("customer"); // customer | admin | store

  return (
    <main className="w-full">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-600 mt-2">Create an account to continue.</p>

        <form className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-semibold mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-[#ECECEC] rounded px-3 py-2 bg-white"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="store">Store</option>
            </select>
          </div>

          {/* Store fields - only visible if store */}
          {role === "store" && (
            <div className="border border-[#ECECEC] rounded p-4 space-y-4">
              <h3 className="font-bold">Store Information</h3>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Store Name
                </label>
                <input
                  type="text"
                  placeholder="Store name"
                  className="w-full border border-[#ECECEC] rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Store Phone
                </label>
                <input
                  type="text"
                  placeholder="+90..."
                  className="w-full border border-[#ECECEC] rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Store Tax ID
                </label>
                <input
                  type="text"
                  placeholder="TXXXXXXXXXX"
                  className="w-full border border-[#ECECEC] rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1">
                  Store Bank Account (IBAN)
                </label>
                <input
                  type="text"
                  placeholder="TR..."
                  className="w-full border border-[#ECECEC] rounded px-3 py-2"
                />
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="button"
            className="w-full rounded font-bold py-3 text-white bg-[#23A6F0]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}

