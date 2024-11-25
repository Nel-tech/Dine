import '../index.css';
import Button from './Button';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
type NavType = {
  Logo: string;
  Link1: string;
  Link2: string;
};

function Nav({ Logo, Link1, Link2 }: NavType) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4">
        <a href="/">
          <h1 className="text-2xl font-extrabold text-[#AD343E]">{Logo}</h1>
        </a>

        <FaBars className='' onClick={() => setisOpen(!isOpen)} />

        <section
          className={`xs:${isOpen ? 'block' : 'hidden'} sm:${
            isOpen ? 'block' : 'hidden'
          } flex flex-1 items-center justify-between xs:absolute xs:right-0 xs:top-full xs:h-[50vh] xs:w-full xs:flex-col xs:bg-white xs:pb-[2rem] xs:shadow-lg xs:mx-auto sm:absolute sm:right-0 sm:top-full sm:h-[50vh] sm:w-full sm:flex-col sm:bg-white sm:pb-[2rem] sm:shadow-lg md:flex`}
        >
          <ul className="flex flex-1 justify-center gap-8 text-[1rem] font-medium text-black xs:flex-col sm:flex-col">
            <li>
              <a
                href="/"
                className="transition-colors duration-300 hover:text-[#AD343E]"
              >
                {Link1}
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="transition-colors duration-300 hover:text-[#AD343E]"
              >
                {Link2}
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 xs:flex-col sm:flex-col">
            <a href="/signin">
              <Button
                name="Login in"
                backgroundColor="bg-[#AD343E]"
                textColor="text-white"
                padding="px-6 py-2"
                index=""
                radius="rounded-full"
              />
            </a>
            <a href="/signup">
              <Button
                name="Sign Up"
                backgroundColor="bg-[#AD343E]"
                textColor="text-white"
                padding="px-6 py-2"
                index=""
                radius="rounded-full"
              />
            </a>
          </div>
        </section>
      </nav>
    </header>
  );
}

export default Nav;
