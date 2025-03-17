import '../index.css';
import {Button} from '../Components/ui/button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
 import {  signOut } from 'firebase/auth';
import {useAuth} from '../Context/AuthContext'
import {auth} from '../Services/Auth/config'
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const  {user} = useAuth()

  

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin'); // Redirect to sign-in after logout
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error('Logout Error:', error.message);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold text-[#AD343E]">
          Dine
        </a>

        {/* Hamburger Menu for mobile:all Screens */}
        <div
          className="cursor-pointer text-2xl xs:block mobile:block tablet:hidden desktop:hidden wide:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="text-[#AD343E]" />
          ) : (
            <FaBars className="text-[#AD343E]" />
          )}
        </div>

        {/* Navigation Links */}
        <section
          className={`xs:${isOpen ? 'block mx-auto text-center' : 'hidden'} mobile:${
            isOpen ? 'block mx-auto text-center' : 'hidden' 
          } flex flex-1 items-center justify-between xs:absolute xs:right-0 xs:top-full xs:w-full xs:h-[50vh] xs:flex-col xs:bg-white xs:pb-6 xs:shadow-lg mobile:absolute mobile:right-0 mobile:top-full mobile:w-full mobile:h-[50vh] mobile:flex-col mobile:bg-white mobile:pb-6 mobile:shadow-lg tablet:static tablet:top-0 tablet:flex tablet:w-auto tablet:flex-row tablet:bg-transparent tablet:shadow-none`}
        >
          <ul className="flex flex-1 justify-center gap-8 text-[1rem] font-medium text-gray-600 xs:flex-col mobile:flex-col tablet:flex-row">
            <li>
              <Link to="/" className="transition-colors duration-300 hover:text-[#AD343E]" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors duration-300 hover:text-[#AD343E]" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors duration-300 hover:text-[#AD343E]" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>

            {user && (
              <>
                <li>
                  <Link to="/profile" className="transition-colors duration-300 hover:text-[#AD343E]" onClick={() => setIsOpen(false)}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="transition-colors duration-300 hover:text-[#AD343E]" onClick={() => setIsOpen(false)}>
                    Menu
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Conditional Rendering Based on Authentication */}
          <div className="flex gap-4 xs:flex-col xs:mt-6 mobile:mt-6 mobile:flex-col tablet:flex-row">
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 text-[#AD343E] border border-[#AD343E] rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#AD343E] hover:text-white hover:border-transparent hover:shadow-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
               <Link to="/signup" onClick={() => setIsOpen(false)}>
  <Button 
    className="rounded-full bg-[#AD343E] text-white px-6 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#9E2A33] hover:shadow-lg"
  >
    Sign Up
  </Button>
</Link>

<Link to="/signin" onClick={() => setIsOpen(false)}>
  <Button 
    variant="outline" 
    className="rounded-full border-[#AD343E] text-[#AD343E] px-6 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#AD343E] hover:text-white hover:border-transparent hover:shadow-lg"
  >
    Login
  </Button>
</Link>
              </>
            )}
          </div>
        </section>
      </nav>
    </header>
  );
}

export default Nav;
