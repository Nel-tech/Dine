import { FaCocktail, FaUtensils, FaCalendarAlt, FaConciergeBell } from "react-icons/fa";

function Services() {
  return (
    <section className="py-[10rem] container">
      <h1 className="text-center text-3xl font-bold pb-[1.5rem]">We Provide Best Services</h1>

      <main className="flex justify-between self-center content-center">
        
        <article className="text-center">
          <div className="w-[4.5rem] h-[4.5rem] rounded-full border-[5px] border-[#AD343E] flex items-center justify-center mx-auto">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#AD343E] flex items-center justify-center">
              <FaCocktail className="text-white text-[2rem]" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Wine and Cocktail</h2>
          <p className="text-[#333333] mt-2">
            Enjoy expertly crafted wines and cocktails, perfect for any occasion. From classic mixes to premium pairings, we have something for every taste.
          </p>
        </article>

        {/* Main Dishes Service */}
        <article className="text-center">
          <div className="w-[4.5rem] h-[4.5rem] rounded-full border-[5px] border-[#AD343E] flex items-center justify-center mx-auto">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#AD343E] flex items-center justify-center">
              <FaUtensils className="text-white text-[2rem]" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Main Dishes</h2>
          <p className="text-[#333333] mt-2">
            Relish our expertly prepared main dishes crafted with the finest ingredients, tailored to meet diverse palates and preferences.
          </p>
        </article>

        {/* Reservation Management Service */}
        <article className="text-center">
          <div className="w-[4.5rem] h-[4.5rem] rounded-full border-[5px] border-[#AD343E] flex items-center justify-center mx-auto">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#AD343E] flex items-center justify-center">
              <FaCalendarAlt className="text-white text-[2rem]" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Reservation Management</h2>
          <p className="text-[#333333] mt-2">
            Book your table with ease. Select your preferred date and time, ensuring your dining experience fits seamlessly into your schedule.
          </p>
        </article>

        {/* Customization Options Service */}
        <article className="text-center">
          <div className="w-[4.5rem] h-[4.5rem] rounded-full border-[5px] border-[#AD343E] flex items-center justify-center mx-auto">
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-[#AD343E] flex items-center justify-center">
              <FaConciergeBell className="text-white text-[2rem]" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-4">Dish Customization</h2>
          <p className="text-[#333333] mt-2">
            Personalize your meal to suit your taste. Choose toppings, portion sizes, or dietary preferences for a tailored dining experience.
          </p>
        </article>
      </main>
    </section>
  );
}

export default Services;
