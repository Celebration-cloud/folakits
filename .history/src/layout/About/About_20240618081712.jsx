
import HeroComponent from '../../components/about/HeroComponenteroComponent'
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'

function About() {
  return (
    <div>
      <Nav/>
      <BreadLink name="About">About</BreadLink>
      <HeroComponent/>
    </div>
  )
}

export default About
