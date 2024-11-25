import '../../../index.css';

import { FaCheck } from 'react-icons/fa';
function FoodAds() {
  return (
    <section>
      <h1 className="mt-[3rem] text-center text-[1.6rem] xs:text-[1rem] sm:text-[1rem] sm:font-bold">
        Perfect Place For An Exceptional Experience
      </h1>

      <main className="mt-[3rem] flex justify-evenly xs:mx-auto xs:flex-col sm:flex-col">
        <article>
          <h2 className="mx-auto mt-[2rem] max-w-[12rem] text-[2rem] font-bold text-[#AD343E] xs:pb-[1rem] xs:text-[1.2rem] sm:mx-auto sm:max-w-[16rem] sm:pb-[1rem] sm:text-[1.4rem] md:text-[1.5rem]">
            Great Food Steak & Great Restaurant
          </h2>
        </article>

        <figure>
          <img
            src="/Assests/food1.png"
            className="mx-auto w-[18rem] xs:w-[11rem] sm:w-[12rem] md:w-[12rem]"
            alt="Delicious food presentation"
          />
        </figure>

        <article className="mt-[3rem] mx-auto ">
          <ul className="flex items-center justify-center gap-1 pb-[1.4rem]">
            <li>
              <FaCheck className="text-[#AD343E] xs:text-[.8rem] sm:[] md:text-[.9rem]" />
            </li>
            <li>
              <p className="xs:text-[.8rem] md:text-[.9rem]">
                Quality foods ingredient assurances
              </p>
            </li>
          </ul>

          <ul className="flex items-center gap-1 pb-[1.4rem]">
            <li>
              <FaCheck className="text-[#AD343E] xs:text-[.8rem] md:text-[.9rem]" />
            </li>
            <li>
              <p className="xs:text-[.8rem] md:text-[.9rem]">
                Award-Winning Restaurant
              </p>
            </li>
          </ul>

          <ul className="flex items-center gap-1 pb-[1.4rem]">
            <li>
              <FaCheck className="text-[#AD343E] xs:text-[.8rem] md:text-[.9rem]" />
            </li>
            <li>
              <p className="xs:text-[.8rem] md:text-[.9rem]">Healthy Food</p>
            </li>
          </ul>
        </article>
      </main>
    </section>
  );
}

export default FoodAds;
