import { useState } from 'react';
import NavForm from '../../../Components/NavForm';
import { signup } from '../../../Services/Auth/Authservice';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid';
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [isSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
   const [ConfirmPassword, ConfirmSetPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

   const ToggleConfirmPassword = () => {
    ConfirmSetPassword(!ConfirmPassword);
  };

  const Navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      window.alert('Passwords do not match');
      return;
    }

    try {
      if (isSignup) {
        await signup(email, password, passwordConfirm);
        window.alert('Account successfully created');
        Navigate('/menu');
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
            Create an account
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="mb-1 block text-sm font-medium text-gray-800">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type={email}
                required
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="relative mb-6">
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Password
              </label>
              <input
                id="password"
                name="new-password"
                type={showPassword ? 'text' : 'password'}
                required
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 text-black"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Confirm Password
              </label>
              <input
               id="confirm-password"
                  name="confirm-password"
                type={ConfirmPassword ? 'text' : 'password'}
                required
                autoComplete="new-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={ToggleConfirmPassword}
                className="absolute right-3 top-1/2 text-black"
              >
                {ConfirmPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded bg-[#AD343E] px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/signin" className="text-[#AD343E] hover:text-indigo-500">
              Log In
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}


