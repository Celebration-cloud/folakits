
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import NewsLetter from '../../components/newsletter/NewsLetter'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'

function Contact() {
  return (
    <div>
      <Nav/>
      <BreadLink name="Contact">Contact</BreadLink>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Contact
