
import { FaUtensils, FaCartArrowDown,FaWineGlassAlt, FaClock } from "react-icons/fa";
function WorkFLow() {
  return (
    <section className="container flex justify-evenly mx-auto self-center content-center">
        <main className="flex gap-[1.5rem]">
            <figure>
                <img src='/Assests/chef.png' alt='Picture-of-a-chef' className="w-[23rem]"/>
            </figure>

             <figure className="pt-[.9rem]">
                <img src='/Assests/various-salads.png' className="w-[15rem]" alt='various-salads' />
                <img src='/Assests/sour-curry-with-snakehead.png' className="w-[15rem] pt-[.9rem]" alt='various-salads'/>
            </figure>

        </main>

      <main>
  <h3 className="text-center uppercase text-lg text-[#AD343E] pb-4 font-semibold">Your Journey to Flavorsome Moments</h3>
  <article className="space-y-6">
    
    
    <aside className="flex items-start gap-1">
      <FaUtensils className="text-[#AD343E] text-[1.5rem] mt-1" />
      <div>
        <h4 className="font-bold text-lg text-gray-800">Exceptional Dining Experience Tailored to Your Taste</h4>
        <p className="max-w-[25rem] text-gray-600 text-sm">Immerse yourself in a world of flavors and elegance, crafted to make every moment unforgettable.</p>
      </div>
    </aside>

    
    <aside className="flex items-start space-x-4">
      <FaCartArrowDown className="text-[#AD343E] text-[1.5rem] mt-1" />
      <div>
        <h4 className="font-bold text-lg text-gray-800">Pre-Order and Reserve with Ease</h4>
        <p className="max-w-[25rem] text-gray-600 text-sm">Select your favorites ahead of time and secure your table in seconds.</p>
      </div>
    </aside>

    
    <aside className="flex items-start space-x-4">
      <FaWineGlassAlt className="text-[#AD343E] text-[1.5rem] mt-1" />
      <div>
        <h4 className="font-bold text-lg text-gray-800">Crafted to Perfection</h4>
        <p className="max-w-[25rem] text-gray-600 text-sm">Our curated menu of premium wines and artisanal cocktails ensures a delightful pairing for every meal.</p>
      </div>
    </aside>

    
    <aside className="flex items-start space-x-4">
      <FaClock className="text-[#AD343E] text-[1.5rem] mt-1" />
      <div>
        <h4 className="font-bold text-lg text-gray-800">Fast, Reliable Reservations</h4>
        <p className="max-w-[25rem] text-gray-600 text-sm">Book your spot and enjoy a seamless dining experience—quick and convenient!</p>
      </div>
    </aside>

  </article>
</main>

    </section>
  )
}

export default WorkFLow