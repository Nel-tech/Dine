import Nav from '../../Components/Nav';
import Footer from '../../Components/Footer';
function Contact() {
  return (
    <main className="h-[80vh] w-full bg-[#F9F9F7]">
      {/* <header>
        <Nav />
      </header> */}

      <section>
        <Nav />
        <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8 mt-[3rem]">
          <div className="w-full max-w-sm">
            <h2 className="mb-8 text-center text-5xl font-bold text-[#2C2F24]">
              Contact Us
            </h2>
            <p className="text-center text-[.9rem] text-[#495460]">
              We consider all the drivers of change gives you the components you
              need to change to create a truly happens.
            </p>

            <section className="mx-auto mt-10 h-auto w-[100%] max-w-lg rounded-lg bg-white p-8 shadow-lg">
              <form>
                <div className="mb-6">
                  <label className="mb-1 block text-sm font-medium text-gray-800">
                    Name
                  </label>
                  <input
                    id="name"
                    name="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-1 block text-sm font-medium text-gray-800">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-1 block text-sm font-medium text-gray-800">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="text"
                    required
                    className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-1 block text-sm: font-medium text-gray-800">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="text"
                    required
                    placeholder="Write your Message"
                    className="block w-full rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder:text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded bg-[#AD343E] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>

      <section className="container flex justify-evenly">
        <article>
          <h1 className='font-bold text-[1.3rem] pb-[1rem]'>Call Us</h1>
          <a
            href="tel:+2347018401605"
            className="text-[1rem] tracking-wider text-[#AD343E]"
          >
            +2347018401605
          </a>
        </article>

        <article>
          <h1 className='font-bold text-[1.3rem] pb-[1rem] '>Hours :</h1>
          <p className='pb-[1rem]'>Mon-Fri: 11am - 8pm</p>
          <p>Sat-Sun: 9am - 10pm</p>
        </article>

        <article>
          <h1 className='font-bold text-[1.3rem] pb-[1rem] '>Our Location:</h1>
          <p>Buk New Site Opposite Nepa Office</p>
        </article>
      </section>
      <Footer />
    </main>
  );
}

export default Contact;
