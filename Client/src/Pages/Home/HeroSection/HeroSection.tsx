import Button from '../../../Components/Button';

function HeroSection() {
  return (
   <section className="relative h-[100vh] w-full bg-hero-section bg-cover bg-center bg-no-repeat xs:bg-Mobile-Hero-section sm:bg-Mobile-Hero-section">
  <main className="container mx-auto mt-[3rem] pt-[11rem] text-center xs:mt-[1rem]">
    <div>
      <h1 className="mx-auto max-w-[28rem] pb-[1.2rem] text-center text-[2.4rem] text-black xs:pb-[.3rem] xs:text-white xs:text-[1.2rem] sm:text-[1.5rem] sm:text-white">
        Welcome to Dine <span>Where Taste Meets Art</span>
      </h1>
      <p className="text-center text-lg text-black xs:text-white xs:text-[1rem]  sm:text-white ">
        We don’t just cook, we stir your soul!
      </p>
    </div>

    <div className="pt-[1rem]">
      <Button
        name="Make Reservation"
        textColor="text-white"
        radius="rounded-full"
        padding="px-8 py-3"
        backgroundColor="bg-[#AD343E] hover:bg-[#AD343E] transform hover:scale-105 transition-all duration-200"
        index="z-50"
      />
    </div>
  </main>
</section>

  );
}

export default HeroSection;
