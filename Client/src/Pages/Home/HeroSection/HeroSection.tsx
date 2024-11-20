import Button from "../../../Components/Button";

type HeroProps = {
  children: React.ReactNode;
};

function HeroSection({ children }: HeroProps) {
  return (
    <section className="relative w-full h-[90vh] bg-hero-section bg-cover bg-center bg-no-repeat">
     
     <div>{children}</div>

      <main className=" container text-center mx-auto relative z-50  h-full space-y-4  mt-[8rem]">
      
        <div>
          <h1 className="text-[2.4rem] pb-[1.2rem] text-center text-black max-w-[28rem] mx-auto">
            Welcome to Dine <span >Where Taste Meets Art</span>
          </h1>
          <p className="text-lg text-black text-center">We don’t just cook, we stir your soul!</p>
        </div>

       

        <Button
          name="Make Reservation"
          textColor="text-white"
          radius="rounded-full"
          padding="px-8 py-3"
          backgroundColor="bg-[#AD343E] hover:bg-[#AD343E] transform hover:scale-105 transition-all duration-200"
          index="z-50"
        />
      
      </main>

 
     
    </section>
  );
}

export default HeroSection;
