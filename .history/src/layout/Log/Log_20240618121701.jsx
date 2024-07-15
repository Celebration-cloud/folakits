
import Footer from '../../components/footer/Footer';
import LoginComponent from '../../components/join/LoginComponent';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink';

function Log() {
  return (
    <div>
      <Nav/>
      <BreadLink name="My Account">My Account</BreadLink>
      <LoginComponent/>
      <Footer/>
    </div>
  )
}

export default Log;