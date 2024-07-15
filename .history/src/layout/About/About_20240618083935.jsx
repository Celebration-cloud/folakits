
import HeroComponent from '../../components/about/HeroComponent'
import Nav from '../../components/nav/Nav'
import Service from '../../components/offers/Service'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'

function About() {
  return (
    <div>
      <Nav/>
      <BreadLink name="About">About</BreadLink>
      <HeroComponent/>
      <Service/>
    </div>
  )
}

export default About
