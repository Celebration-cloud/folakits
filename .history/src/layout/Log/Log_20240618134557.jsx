
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import LoginComponent from '../../components/join/LoginComponent';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink';
import ForgotPasswordComponent from '/src/components/join/ForgotPasswordComponent'
function Log() {
  const [logged, setLogged] = useState(false)
  const [chain, setChain] = useState(0)
  const handleChain = () =>{
    setChain(1)
  }
  const control = [
    <LoginComponent key="login" handleChain />,
    <ForgotPasswordComponent key="forgot-password" />,
  ];
  return (
    <div>
      <Nav/>
      <BreadLink name="My Account">My Account</BreadLink>
      {control[chain]}
      <Footer/>
    </div>
  )
}

export default Log;