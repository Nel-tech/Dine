import Nav from "../../Components/Nav"
import HeroSection from "../Home/HeroSection/HeroSection"
import FoodAds from "../Home/FoodAds/FoodAds"

function Home() {
  return (
    <section>

         <main>
          <HeroSection>
           
            <Nav/>
            </HeroSection>

            <FoodAds/>
        </main>
    </section>
  )
}

export default Home