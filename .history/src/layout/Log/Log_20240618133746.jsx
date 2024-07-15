
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import LoginComponent from '../../components/join/LoginComponent';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink';
import ForgotPasswordComponent from '/src/components/join/ForgotPasswordComponent'
function Log() {
const control = [
  <LoginComponent key="login" />,
  <ForgotPasswordComponent key="forgot-password" />,
];

  const [logged, setLogged] = useState(false)
  const [chain, setChain] = use
  return (
    <div>
      <Nav/>
      <BreadLink name="My Account">My Account</BreadLink>
      <LoginComponent/>
      <ForgotPasswordComponent/>
      <Footer/>
    </div>
  )
}

export default Log;