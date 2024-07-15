
import AboutComponent from '../../components/about/AboutComponent'
import HeroComponent from '../../components/about/HeroComponent'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import NewsLetter from '../../components/newsletter/NewsLetter'
import Service from '../../components/offers/Service'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'

function About() {
  return (
    <div>
      <Nav/>
      <BreadLink name="About">About</BreadLink>
      <HeroComponent/>
      <Service/>
      <AboutComponent/>
      <
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default About
