
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import LoginComponent from '../../components/join/LoginComponent';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink';

function Log() {
  const [logged, setLogged] = useState()
  return (
    <div>
      <Nav/>
      <BreadLink name="My Account">My Account</BreadLink>
      <LoginComponent/>
      <For
      <Footer/>
    </div>
  )
}

export default Log;