import '../index.css';
import Button from './Button';

type NavType = {
  Logo: string;
  Link1: string;
  Link2: string;
};

function Nav({ Logo, Link1, Link2 }: NavType) {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 ">
        <a href="/">
          <h1 className="text-2xl font-extrabold text-[#AD343E]">{Logo}</h1>
        </a>

        <ul className="flex gap-[2rem] text-black text-[1rem] font-medium">
          <li>
            <a
              href="/"
              className="hover:text-[#AD343E] transition-colors duration-300"
            >
              {Link1}
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-[#AD343E] transition-colors duration-300"
            >
              {Link2}
            </a>
          </li>
        </ul>

        <div className="hidden lg:flex gap-[2rem]">
          <a href="/signin">
            <Button
              name="Log In"
              backgroundColor="bg-[#AD343E]"
              textColor="text-white"
              padding="px-6 py-2"
              index=""
              radius="rounded-full"
            />
          </a>
          <a href="/signup">
            <Button
              name="Sign In"
              backgroundColor="bg-[#F4F4F4]"
              textColor="text-[#AD343E]"
              padding="px-6 py-2"
              index=""
              radius="rounded-full border border-[#AD343E]"
            />
          </a>
        </div>

        {/* Mobile Menu Toggle
        <div className="lg:hidden">
          <button className="text-[#AD343E] text-3xl focus:outline-none">
            ☰
          </button>
        </div> */}
      </nav>

      {/* Mobile Menu
      <ul className="lg:hidden bg-white shadow-md w-full flex flex-col text-black font-medium text-center py-4 space-y-2">
        <li>
          <a href="/" className="hover:text-[#AD343E] transition-colors duration-300">
            {Link1}
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-[#AD343E] transition-colors duration-300">
            {Link2}
          </a>
        </li>
        <li>
          <a href="/signin" className="hover:text-[#AD343E] transition-colors duration-300">
            Log In
          </a>
        </li>
        <li>
          <a href="/signup" className="hover:text-[#AD343E] transition-colors duration-300">
            Sign In
          </a>
        </li>
      </ul> */}
    </header>
  );
}

export default Nav;
