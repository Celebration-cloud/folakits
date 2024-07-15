
import ContactComponent from '../../components/contact/ContactComponent'
import Footer from '../../components/footer/Footer'
import Nav from '../../components/nav/Nav'
import NewsLetter from '../../components/newsletter/NewsLetter'
import BreadLink from '../../components/reuseable/breadlink/BreadLink'
import useWidthSize from '../../components/reuseable/width/useWidthSize'

function Contact() {
  const { width } = useWidthSize();
  return (
    <div>
      <Nav/>
      <BreadLink name="Contact">Contact</BreadLink>
      <ContactComponent/>
      <NewsLetter/>
      <Footer/>
      {w}
    </div>
  )
}

export default Contact
