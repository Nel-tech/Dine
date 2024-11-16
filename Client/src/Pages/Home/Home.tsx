import Nav from "../../Components/Nav"
import HeroSection from "./HeroSection/HeroSection"
import FoodAds from "./FoodAds/FoodAds"
import Services from "./Services/Services"

function Home() {
  return (
    <section>

         <main>
          <HeroSection>
           
            <Nav/>
            </HeroSection>

            <FoodAds/>
            <Services/>
        </main>
    </section>
  )
}

export default Home