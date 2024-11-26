import '../index.css';
import Button from './Button';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4">
        <a href="/">
          <h1 className="text-2xl font-extrabold text-[#AD343E]">Dine</h1>
        </a>

        <FaBars className="hidden xs:block sm:block" onClick={() => setisOpen(!isOpen)} />

        <section
          className={`xs:${isOpen ? 'block' : 'hidden'
          } flex flex-1 items-center justify-between xs:absolute xs:right-0 xs:top-full xs:mx-auto xs:h-[60vh] xs:w-full xs:flex-col xs:bg-white xs:pb-[2rem] xs:shadow-lg sm:absolute sm:right-0 sm:top-full sm:h-[60vh] sm:w-full sm:flex-col sm:bg-white sm:pb-[2rem] sm:shadow-lg md:flex`}
        >
          <ul className="flex flex-1 justify-center gap-8 text-[1rem] font-medium text-black xs:flex-col  sm:flex-col">
            <Link to="/">
              <li className="transition-colors duration-300 hover:text-[#AD343E]">
                HOME
              </li>
            </Link>

            <Link to='/about'>
              <li className="transition-colors duration-300 hover:text-[#AD343E]">
                ABOUT
              </li>
            </Link>
          </ul>

          {/* Buttons */}
          <div className="flex gap-4 xs:flex-col sm:flex-col">
            <Link to="/signin">
              <Button
                name="Login in"
                backgroundColor="bg-[#AD343E]"
                textColor="text-white"
                padding="px-6 py-2"
                index=""
                radius="rounded-full"
              />
            </Link>

            <Link to="/signup">
              <Button
                name="Sign Up"
                backgroundColor="bg-[#AD343E]"
                textColor="text-white"
                padding="px-6 py-2"
                index=""
                radius="rounded-full"
              />
            </Link>
          </div>
        </section>
      </nav>
    </header>
  );
}

export default Nav;
