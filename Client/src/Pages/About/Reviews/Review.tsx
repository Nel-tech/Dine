// import { CustomerRev } from "../../../Helpers/Data";
function Review() {
  return (
    <main className="mt-[5rem]">
      <h1 className="text-center text-[2rem] font-medium sm:text-[1.5rem]">
        What Our Customer's Say
      </h1>
      <section className="pt-[3rem]">
        <ul className=" container flex justify-between self-center items-center content-center xs:flex-col sm:flex-col sm:gap-[2rem]">
          <li className="bg-[#F9F9F7] w-[20rem] p-[2rem] h-[17rem] rounded-md ">
            <h1 className="text-[#AD343E] font-bold">"The best restaurant"</h1>
            <p className="max-w-[18rem] text-[.8rem] leading-[1.5rem] pt-[1rem]">
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div className="flex gap-3 self-center items-center content-center pt-[.7rem]">
              <img
                src="/src/assets/Profile1.jpg"
                alt=""
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <p className="text-[.6rem] font-bold">Bello Miracle</p>
            </div>
          </li>

          <li className="bg-[#F9F9F7] w-[20rem] p-[2rem] h-[17rem] rounded-md">
            <h1 className="text-[#AD343E] font-bold">"Simply delicious"</h1>
            <p className="max-w-[18rem] text-[.8rem] leading-[1.5rem] pt-[1rem]">
              Place exceeded my expectations on all fronts. The ambiance was
              cozy and relaxed, making it a perfect venue for our anniversary
              dinner. Each dish was prepared and beautifully presented.
            </p>

            <div className="flex gap-3 self-center items-center content-center pt-[.7rem]">
              <img
                src="/src/assets/Profile2.jpg"
                alt=""
               className="w-[50px] h-[50px] rounded-full object-cover"
              />
               <p className="text-[.6rem] font-bold">Femi Kayode</p>
            </div>
          </li>

          <li className="bg-[#F9F9F7] w-[20rem] p-[2rem] h-[17rem] rounded-md">
            <h1 className="text-[#AD343E] font-bold">"One of a kind restaurant"</h1>
            <p className="max-w-[18rem] text-[.8rem] leading-[1.5rem] pt-[1rem]">
              The culinary experience at place is first to none. The atmosphere
              is vibrant, the food - nothing short of extraordinary. The food
              was the highlight of our evening. Highly recommended.
            </p>
            <div className="flex gap-3 self-center items-center content-center pt-[.7rem]">

            <img
              src="/src/assets/Profile3.jpeg"
              alt=""
             className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <p className="text-[.6rem] font-bold">Rachel Frisk</p>
            </div>
          </li>
        </ul>
      </section>
    </main>

    // <main>
    //   <section>
    //     {CustomerRev.map((rev) => {
    //         return (
    //             <article key={rev.id}>

    //             <h1>{rev.Title}</h1>
    //             <p>{rev.Review}</p>
    //             <img src={rev.Profile} alt={rev.Name}/>
    //             <h2>{rev.Name}</h2>
    //             </article>
    //         )
    //     })}
    //   </section>
    // </main>
  );
}

export default Review;
