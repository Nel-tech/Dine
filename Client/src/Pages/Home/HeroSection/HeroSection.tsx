import Button from "../../../Components/Button"
type HeroProps = {
  children:React.ReactNode
}
function HeroSection({children}:HeroProps) {
  return (
    <section>

    <main className="relative z-50 mx-auto w-full bg-hero-section h-[90vh] bg-cover bg-center bg-no-repeat ">
         {/* <div className="absolute inset-0 z-10 bg-black opacity-30"></div> */}
      {children}

      <div className='ml-[2.5rem] pt-[6rem] text-center'>

        <h1 className = "text-[4rem] text-center relative z-50 text-orange-500">Welcome to RsvIt <span>Where</span></h1>
      <p className="relative z-50 text-white text-center  text-[1.2rem]">Great Memories are made around the table.</p>
      </div>

      <div className="flex justify-center self-center content-center">
        {/* <button className="bg-orange-500 text-white px-[.5rem] py-2 rounded mt-[.5rem] ">
          Make Reservation
        </button> */}

        <Button name="Make Reservation" textColor="text-white" radius='rounded' padding='p-2.5' backgroundColor='bg-orange-500'/>
      </div>
      </main>  
    </section>
  )
}

export default HeroSection

