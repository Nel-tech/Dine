import Nav from '../../../Components/Nav';
export default function SignIn() {
  return (
    <section>
      <Nav Link1='' Link2='' Logo='Dine' />
      <div className="flex min-h-screen flex-col justify-center items-center px-4 py-8">
        <div className="w-full max-w-sm">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
            Create an account
          </h2>

          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                required
                autoComplete="name"
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-800 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-800 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-[#AD343E] px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
