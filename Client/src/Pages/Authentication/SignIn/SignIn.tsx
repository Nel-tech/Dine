import NavForm from '../../../Components/NavForm';
import { signin } from '../../../Services/Auth/Authservice.ts';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLogin] = useState(true);
  const Navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await signin(email, password);
        window.alert('Login Successfully')
        Navigate('/summary')

      }
    } catch (error) {
      console.error('Error occurred:', error);
      window.alert(
        error instanceof Error
          ? error.message
          : 'An error occurred. Please try again.'
      );
    }
  };
  return (
    <section>
      <NavForm />

      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-sm">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="mb-1 block text-sm font-medium text-gray-800">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={(e)=> setEmail(e.target.value)}
                autoComplete="email"
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                 onChange={(e)=> setPassword(e.target.value)}
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-sm text-[#AD343E] hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded bg-[#AD343E] px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#AD343E] hover:text-indigo-500">
              Create One
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
