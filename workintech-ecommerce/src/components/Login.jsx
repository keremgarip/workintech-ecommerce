export default function Login() {

  return (
    <main className="w-full">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Log In</h1>
        <p className="text-gray-600 mt-2">
          Log in to your account and start shopping with us.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-[#ECECEC] rounded px-3 py-2"
            />
          </div>

          <button
            type="button"
            className="w-full rounded font-bold py-3 text-white bg-[#23A6F0]"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}