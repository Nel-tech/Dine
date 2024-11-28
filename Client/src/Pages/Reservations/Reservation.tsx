import { useState } from 'react';
import NavForm from '../../Components/NavForm';
import Footer from '../../Components/Footer';

function Reservation() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <NavForm/>
      <section className=" w-full h-[100vh]   mx-auto  px-4 py-[5rem] ">
        <h1 className="text-[#AD343E] text-[2rem] mx-auto text-center">
          Book A Table
        </h1>

        <p className="max-w-[30rem] mx-auto text-center pb-[.9rem]">
          We can’t wait to host you. Reserve your table now and prepare for an
          unforgettable dining experience
        </p>

        <article className="bg-[#F9F9F7] w-[30rem] pb-[2rem] rounded-lg  mx-auto  ">
          <form action="" className="pt-[3rem] mx-auto">
            <div className="mb-6 px-[2rem]">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                className="block w-full rounded border border-gray-300 px-3 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-200"
              />
            </div>

            <div className="mb-6 px-[2rem]">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                className="block w-full rounded border border-gray-300 px-3 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-200"
              />
            </div>

            <div className="mb-6 px-[2rem]">
              <label htmlFor="date">Pick A Date</label>
              <input
                type="date"
                name="date"
                id="date"
                required
                className="block w-full rounded border border-gray-300 px-3 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-6 px-[2rem]">
              <label htmlFor="time">Pick A Time</label>
              <input
                type="time"
                name="time"
                id="time"
                required
                className="block w-full rounded border border-gray-300 px-3 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center justify-center gap-4 my-4">
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-[#AD343E] text-white font-semibold rounded hover:bg-[#AD343E] transition-all duration-200"
              >
                +
              </button>
              <p className="text-lg font-bold">{count}</p>
              <button
                type="button"
                onClick={() => count > 0 && setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-all duration-200"
              >
                -
              </button>
            </div>

            <div className="mx-auto text-center">
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-[#AD343E] text-white rounded"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        </article>
      </section>
      
      <Footer />
    </main>
  );
}

export default Reservation;
