
import AboutComponent from '../../components/about/AboutComponent'
import Advert from '../../components/about/Advert'
import HeroComponent from '../../components/about/HeroComponent'
import BrowseComponent from '../../components/browse/BrowseComponent'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import NewsLetter from '../../components/newsletter/NewsLetter'
import Service from '../../components/offers/Service'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'
import MobileNav from '../../components/reuseable/mobileNav/MobileNav'
import useWidthSize from '../../components/reuseable/width/useWidthSize'

function About() {
  const { width } = useWidthSize();
  return (
    <div>
      <Nav/>
      <BreadLink name="About">About</BreadLink>
      <HeroComponent/>
      <Service/>
      <AboutComponent/>
      <Advert/>
      <BrowseComponent/>
      <NewsLetter/>
      <Footer/>
      {width < 880 && <MobileNav/}
    </div>
  )
}

export default About
