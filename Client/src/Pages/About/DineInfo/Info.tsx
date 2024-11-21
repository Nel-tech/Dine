function Info() {
  return (
    <main className="bg-[#F9F9F7] w-[100%] mt-[4rem]">
      <section className="container ] flex justify-between items-center content-center">
        <article>
          <h1 className=" text-[1.5rem] font-bold">
            A little information for our valuable guest
          </h1>
          <p className="max-w-[30rem] text-[.9rem]">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>
          <div className="flex gap-5">
            <div>
              <div className="mb-[1rem] w-[10rem] h-[6rem] bg-white flex flex-col items-center justify-center rounded-md shadow-lg border border-gray-300 hover:bg-gray-100 hover:shadow-xl transition-all duration-200">
                <h1 className="text-lg font-bold text-gray-800">2</h1>
                <p className="text-sm text-gray-600">Location</p>
              </div>

              <div className="w-[10rem] h-[6rem] bg-white flex flex-col items-center justify-center rounded-md shadow-lg border border-gray-300 hover:bg-gray-100 hover:shadow-xl transition-all duration-200">
                <h1 className="text-lg font-bold text-gray-800">2019</h1>
                <p className="text-sm text-gray-600">Founded</p>
              </div>
            </div>

            <div>
              <div className="mb-[1rem] w-[10rem] h-[6rem] bg-white flex flex-col items-center justify-center rounded-md shadow-lg border border-gray-300 hover:bg-gray-100 hover:shadow-xl transition-all duration-200">
                <h1 className="text-lg font-bold text-gray-800">30+</h1>
                <p className="text-sm text-gray-600">Staff Members</p>
              </div>

              <div className="w-[10rem] h-[6rem] bg-white flex flex-col items-center justify-center rounded-md shadow-lg border border-gray-300 hover:bg-gray-100 hover:shadow-xl transition-all duration-200">
                <h1 className="text-lg font-bold text-gray-800">100%</h1>
                <p className="text-sm text-gray-600">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </article>

        <figure className="mt-8">
          <img
            src="/Assests/chef.png"
            alt="Picture-of-a-chef"
            className="w-[30rem]"
          />
        </figure>
      </section>
    </main>
  );
}

export default Info;