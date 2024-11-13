import '../index.css'

function Nav() {
  return (
    <header className='container'>
      <nav className="flex justify-between items-center self-center content-center  relative z-50">
        <h1 className="text-lg font-bold text-white">RsvIt</h1>
        <ul className="flex space-x-8 ml-[4rem] text-white text-center ">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
        </ul>

        <ul className='flex gap-3'>
        <button className="bg-orange-500 text-white px-[1rem] py-3 rounded mt-[.5rem] hover:bg-white hover:text-orange-500">
         Log In
        </button>
          <button className=" outline-transparent border-2 text-white px-[1rem] py-[.1rem] rounded mt-[.5rem] hover:bg-orange-500 hover:border-none">
          Sign Up
        </button>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
