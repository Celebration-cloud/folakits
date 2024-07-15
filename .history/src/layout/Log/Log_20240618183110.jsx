
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import LoginComponent from '../../components/join/LoginComponent';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink';
import ForgotPasswordComponent from '/src/components/join/ForgotPasswordComponent'
import UserDashboard from '../../components/dashboard/UserDashboard';
function Log() {
  const [logged, setLogged] = useState(false)
  const [chain, setChain] = useState(0)
  const handleChain = () =>{
    setChain(prev => prev + 1)
  }
  console.log(chain)
  const control = [
    <LoginComponent key="login" handleChain={handleChain} />,
    <ForgotPasswordComponent key="forgot-password" />,
    <UserDashboard/
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