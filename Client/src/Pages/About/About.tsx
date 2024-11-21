
import Nav from "../../Components/Nav"
import AboutAds from "./AboutAds/AboutAds"
import AboutHeroSection from "./HeroSection/AboutHeroSection"
import Offers from "./Offers/Offers"
import Info from "./DineInfo/Info"
import Footer from "../../Components/Footer"
function About() {
  return (
    <div>
        <Nav/>
        <AboutHeroSection/>
        <AboutAds/>
        <Offers/>
        <Info/>
        <Footer/>
    </div>
  )
}

export default About