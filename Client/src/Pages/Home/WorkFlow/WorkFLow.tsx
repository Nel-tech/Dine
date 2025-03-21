import Chef from '../../../assets/chef.jpg'
import Salads from '../../../assets/various-salads.png'
import Curry from '../../../assets/sour-curry-with-snakehead.png'
import { FaUtensils, FaCartArrowDown,FaWineGlassAlt, FaClock } from "react-icons/fa";
function WorkFLow() {
  return (
    <section className="container flex justify-evenly mx-auto self-center content-center desktop:gap-[2rem] xs:flex-col mobile:flex-col tablet:flex-col">
        <main className="flex gap-[1.5rem] xs:flex-col">
            <figure>
                <img src={Chef} alt='Picture-of-a-chef' className="w-[23rem] rounded-md xs:w-[15rem] xs:mx-auto"/>
            </figure>

             <figure className="pt-[.9rem]">
                <img src={Salads}className="w-[15rem]  xs:w-[12rem] xs:mx-auto " alt='various-salads' />
                <img src={Curry} className="w-[15rem] pt-[.9rem] xs:w-[12rem] xs:mx-auto" alt='various-salads'/>
            </figure>

        </main>

      <main className="xs:mt-[2rem] tablet:mx-auto tablet:mt-[2rem]">
  <h3 className="text-center uppercase text-lg text-[#AD343E] pb-4 font-bold xs:text-[1rem] mobile:mt-[3rem] tablet:text-[1.5rem]">Your Journey to Flavorsome Moments</h3>
  <article>
    
    
    <aside className="flex items-start gap-3 pb-[2rem]  xs:gap-3 mobile:gap-2 desktop:gap-2">
      <FaUtensils className="text-[#AD343E] text-[1.5rem] mt-1" />
      <div>
        <h4 className="font-bold text-lg text-gray-800 xs:text-sm mobile:text-sm mobile:pb[.6rem]  desktop:text-[1rem]">Exceptional Dining Experience</h4>
        <p className="max-w-[25rem] text-gray-600 text-sm xs:text-[.7rem]">Immerse yourself in a world of flavors and elegance, crafted to make every moment unforgettable.</p>
      </div>
    </aside>

    
    <aside className="flex items-start pb-[2rem] gap-3  xs:gap-3  mobile:gap-2">
      <FaCartArrowDown className="text-[#AD343E] text-[1.5rem] mt-1  " />
      <div>
        <h4 className="font-bold text-lg text-gray-800 xs:text-sm mobile:text-sm mobile:pb[.6rem]">Pre-Order and Reserve with Ease</h4>
        <p className="max-w-[25rem] text-gray-600 text-sm xs:text-[.7rem] xs:max-w-[20rem]">Select your favorites ahead of time and secure your table in seconds.</p>
      </div>
    </aside>

    
    <aside className="flex items-start pb-[2rem] gap-3 xs:gap-3 smgap-2">
      <FaWineGlassAlt className="text-[#AD343E] text-[1.5rem] mt-1" />
      <div>
        <h4 className="font-bold text-lg text-gray-800 xs:text-sm  mobile:text-sm mobile:pb[.6rem]">Crafted to Perfection</h4>
        <p className="max-w-[25rem] text-gray-600 text-sm xs:text-[.7rem] xs:max-w-[20rem]">Our curated menu of premium wines and artisanal cocktails ensures a delightful pairing for every meal.</p>
      </div>
    </aside>

    
    <aside className="flex items-start pb-[2rem] gap-3 xs:gap-3  mobile:gap-2">
      <FaClock className="text-[#AD343E] text-[1.5rem] mt-1" />
      <div>
        <h4 className="font-bold text-lg text-gray-800  xs:text-sm  mobile:text-sm mobile:pb[.6rem]">Fast, Reliable Reservations</h4>
        <p className="max-w-[25rem] text-gray-600 text-sm  xs:text-[.7rem] xs:max-w-[20rem]">Book your spot and enjoy a seamless dining experience—quick and convenient!</p>
      </div>
    </aside>

  </article>
</main>

    </section>
  )
}

export default WorkFLow