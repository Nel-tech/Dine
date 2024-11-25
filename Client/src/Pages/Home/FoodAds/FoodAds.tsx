import '../../../index.css';

import { FaCheck } from 'react-icons/fa';
function FoodAds() {
  return (
    <section>
      <h1 className="mt-[3rem] text-center text-[1.6rem] xs:text-[1rem]  xs:font-bold sm:text-[1.5rem] sm:font-bold">
        Perfect Place For An Exceptional Experience
      </h1>

    <main className="container mt-[3rem] flex items-center justify-evenly xs:flex-col sm:flex-col sm:justify-center">
  <article className="text-center">
    <h2 className="mt-[2rem] max-w-[15rem] text-[2rem] font-bold text-[#AD343E] xs:pb-[1rem] xs:text-[1.2rem] sm:max-w-[16rem] sm:pb-[1rem] sm:text-[1.4rem] md:text-[1.5rem]">
      Great Food Steak & Great Restaurant
    </h2>
  </article>

  <figure className="mx-4">
    <img
      src="/Assests/food1.png"
      className="w-[18rem] xs:w-[11rem] sm:w-[12rem] md:w-[12rem]"
      alt="Delicious food presentation"
    />
  </figure>

  <article className='xs:mt-[1rem] sm:pt-[2rem]'>
    <ul className="flex items-center gap-1 pb-[1.4rem]">
      <li>
        <FaCheck className="text-[#AD343E] xs:text-[.8rem] sm:text-[.8rem] md:text-[.9rem]" />
      </li>
      <li>
        <p className="xs:text-[.8rem] sm:text-[.8rem] md:text-[.9rem]">
          Quality foods ingredient assurances
        </p>
      </li>
    </ul>

    <ul className="flex items-center gap-1 pb-[1.4rem]">
      <li>
        <FaCheck className="text-[#AD343E] xs:text-[.8rem] sm:text-[.8rem] md:text-[.9rem]" />
      </li>
      <li>
        <p className="xs:text-[.8rem] sm:text-[.8rem] md:text-[.9rem]">
          Award-Winning Restaurant
        </p>
      </li>
    </ul>

    <ul className="flex items-center gap-1 pb-[1.4rem]">
      <li>
        <FaCheck className="text-[#AD343E] xs:text-[.8rem] sm:text-[.8rem] md:text-[.9rem]" />
      </li>
      <li>
        <p className="xs:text-[.8rem] sm:text-[.8rem] md:text-[.9rem]">Healthy Food</p>
      </li>
    </ul>
  </article>
</main>


    </section>
  );
}

export default FoodAds;
