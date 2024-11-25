import { useState } from 'react';
// import Nav from '../../../Components/Nav';
import { signup } from '../../../Services/Auth/Authservice';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [isSignup] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      await signup(email, password, passwordConfirm);
    }else if(password !== passwordConfirm){
      window.alert('password does not match')
    }else{
      console.log('error occured')
    }
  };

  return (
    <section>
      {/* <Nav Link1='' Link2='' Logo='Dine' /> */}
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
                type={password}
                required
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-gray-800"
              >
                Confirm Password
              </label>
              <input
                id="password"
                name="password"
                type={passwordConfirm}
                required
                autoComplete="current-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <a href="/menu">

            <button
              type="submit"
              className="w-full rounded bg-[#AD343E] px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Create
            </button>
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
