
function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full bg-hero-section bg-cover bg-center bg-no-repeat xs:bg-Mobile-Hero-section sm:bg-Mobile-Hero-section">
      <main className="container mx-auto mt-[3rem] pt-[11rem] text-center xs:mt-[1rem]">
        <div>
          <h1 className="mx-auto max-w-[28rem] pb-[1.2rem] text-center text-[2.4rem] text-black xs:pb-[.3rem] xs:text-[1.2rem] xs:text-white sm:text-[1.5rem] sm:text-white">
            Welcome to Dine <span>Where Taste Meets Art</span>
          </h1>
          <p className="text-center text-lg text-black xs:text-[.8rem] xs:text-white sm:text-[1rem] sm:text-white">
            We don’t just cook, we stir your soul!
          </p>
        </div>

       
      </main>
    </section>
  );
}

export default HeroSection;
