import Nav from "../../Components/Nav"
import HeroSection from "./HeroSection/HeroSection"
import FoodAds from "./FoodAds/FoodAds"
import Services from "./Services/Services"
import WorkFLow from "./WorkFlow/WorkFLow"
import Footer from "./Footer/BottomFooter"

function Home() {
  return (
    <section>

         <main>
            <Nav Link1="Home" Logo="Dine" Link2="About"/>
          <HeroSection/>
            <FoodAds/>
            <Services/>
            <WorkFLow/>
            <Footer/>
        </main>
    </section>
  )
}

export default Home