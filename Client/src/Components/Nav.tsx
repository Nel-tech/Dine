import '../index.css'

function Nav() {
  return (
    <header className='container'>
      <nav className="flex justify-between items-center self-center content-center  relative z-50">
        <h1 className="text-lg font-bold text-black">Dine</h1>
        <ul className="flex space-x-8 ml-[4rem] text-black text-center ">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
        </ul>

        <ul className='flex gap-3'>
        <button className="bg-[#0077FF] text-white px-[1rem] py-3 rounded mt-[.5rem] hover:bg-white hover:text-[#0077FF]">
         Log In
        </button>
          <button className=" outline-transparent border-2 text-black px-[1rem] py-[.1rem] rounded mt-[.5rem] hover:bg-[#0077FF] hover:border-none">
          Sign Up
        </button>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
