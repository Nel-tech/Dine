import Button from '../../../Components/Button';

function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] bg-hero-section bg-cover bg-center bg-no-repeat">
      <main className=" container text-center mx-auto pt-[11rem] mt-[3rem]">
        <div>
          <h1 className="text-[2.4rem] pb-[1.2rem] text-center text-black max-w-[28rem] mx-auto">
            Welcome to Dine <span>Where Taste Meets Art</span>
          </h1>
          <p className="text-lg text-black text-center">
            We don’t just cook, we stir your soul!
          </p>
        </div>

        <div className='pt-[1rem]'>
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
