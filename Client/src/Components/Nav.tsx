import '../index.css'

function Nav() {
  return (
    <section className='container'>
      <nav className="flex justify-between items-center">
        <h1 className="text-lg font-bold">RsvIt</h1>
        <ul className="flex space-x-4">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Make A Reservation
        </button>
      </nav>
    </section>
  );
}

export default Nav;
