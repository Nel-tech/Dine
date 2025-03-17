import '../../../index.css';
import food1 from '../../../assets/food1.png'
import { FaCheck } from 'react-icons/fa';
function FoodAds() {
  return (
    <section>
      <h1 className="mt-[12rem] text-center text-[1.6rem] xs:text-[1rem]  xs:font-bold mobile:text-[1.5rem] mobile:font-bold">
        Perfect Place For An Exceptional Experience
      </h1>

    <main className=" mt-[3rem] flex items-center justify-evenly xs:flex-col mobile:flex-col mobile:justify-center tablet:justify-center tablet:self-center tablet:items-center">
  <article className="text-center">
    <h2 className=" max-w-[15rem] text-[2rem] font-bold text-[#AD343E] xs:pb-[1rem] xs:text-[1.2rem] mobile:max-w-[16rem] mobile:pb-[1rem] mobile:text-[1.4rem] tablet:text-[1.5rem]">
      Great Food Steak & Great Restaurant
    </h2>
  </article>

  <figure className="mx-4">
    <img
      src={food1}
      className="w-[18rem] xs:w-[11rem] mobile:w-[12rem] tablet:w-[12rem]"
      alt="Delicious food presentation"
    />
  </figure>

  <article className='xs:mt-[1rem] mobile:pt-[2rem]'>
    <ul className="flex items-center gap-1 pb-[1.4rem]">
      <li>
        <FaCheck className="text-[#AD343E] xs:text-[.8rem] mobile:text-[.8rem] tablet:text-[.9rem]" />
      </li>
      <li>
        <p className="xs:text-[.8rem] mobile:text-[.8rem] tablet:text-[.9rem]">
          Quality foods ingredient assurances
        </p>
      </li>
    </ul>

    <ul className="flex items-center gap-1 pb-[1.4rem]">
      <li>
        <FaCheck className="text-[#AD343E] xs:text-[.8rem] mobile:text-[.8rem] tablet:text-[.rem]" />
      </li>
      <li>
        <p className="xs:text-[.8rem] mobile:text-[.8rem] tablet:text-[.9rem]">
          Award-Winning Restaurant
        </p>
      </li>
    </ul>

    <ul className="flex items-center gap-1 pb-[1.4rem]">
      <li>
        <FaCheck className="text-[#AD343E] xs:text-[.8rem] mobile:text-[.8rem] tablet:text-[.9rem]" />
      </li>
      <li>
        <p className="xs:text-[.8rem] mobile:text-[.8rem] tablet:text-[.9rem]">Healthy Food</p>
      </li>
    </ul>
  </article>
</main>


    </section>
  );
}

export default FoodAds;
