import { FaPhone, FaEnvelope, FaLandmark } from 'react-icons/fa';
function AboutHeroSection() {
  return (
    <main className=" mt-[5rem]  flex justify-around content-center self-center xs:flex-col sm:flex-col ">
      <section>
        <figure className="relative mx-auto flex justify-center self-center items-center">
          <img
            src="../../../../Assests/HeroBackground.jpg"
            className="w-[34rem] rounded-lg  mt-[2rem] xs:w-[18rem]"
            alt=""
          />

          <div className="absolute bottom-[-2rem] right-[-3rem] xs:hidden sm:hidden">
            <figcaption className="pt-[2rem] pl-[2rem] bg-[#474747] w-[22rem] h-[15rem] rounded-lg sm:w-[15rem]">
              <h1 className='font-bold text-white'>Come and Vist us</h1>

              <section className='text-white pt-[1rem]' >
                <figure className="flex gap-4 pb-[1rem] ">
                  <FaPhone />
                  <p>+2349081715621</p>
                </figure>

                <figure className="flex  gap-4 pb-[1rem]">
                  <FaEnvelope />
                  <p>Dine@gmail.com</p>
                </figure>

                <figure className="flex  gap-4">
                  <FaLandmark />
                  <p>Buk New Site Opposite Nepa Office</p>
                </figure>
              </section>
            </figcaption>
          </div>
        </figure>
      </section>

      <section className="mt-[3.7rem] sm:mt-[6rem]">
        <h1 className="text-[#AD343E] text-[1.5rem]  font-bold xs:text-[1.2rem] xs:mx-auto ">
          Where Flavor Meets Convenience
        </h1>

        <p className="text-[.9rem] max-w-[33rem] leading-[2rem]">
          At Dine, we redefine the way you experience dining. From exquisite
          dishes crafted with the freshest ingredients to seamless online
          reservations, we bring convenience, flavor, and sophistication to your
          table. Whether it's a cozy dinner for two or a lively gathering, Dine
          makes every moment special. Explore. Reserve. Delight.
        </p>
      </section>
    </main>
  );
}

export default AboutHeroSection;
