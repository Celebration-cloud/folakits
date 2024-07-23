/* eslint-disable react/prop-types */

import { useCallback, useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import LoginComponent from '../../components/join/LoginComponent';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink';
import ForgotPasswordComponent from '/src/components/join/ForgotPasswordComponent'
import UserDashboard from '../../components/dashboard/UserDashboard';
import useWidthSize from '../../components/reuseable/width/useWidthSize';
import MobileNav from '../../components/reuseable/mobileNav/MobileNav';
import SignUpComponent from '../../components/join/SignUpComponent';
function Log({name}) {
  const [logged, setLogged] = useState(true)
  const [chain, setChain] = useState(0)
  const { width } = useWidthSize();
  useEffect(() => {
    if(logged){
      setChain(3)
    }
  }, [logged])
  useCallback(
    () => {
      if (logged) {
        setChain(3);
      }
    },
    [logged],
  )
  
  
  const handleChain = () =>{
    setChain(2)
  }
  const handleChainSignUp = () =>{
    setChain(0)
  }
  const handleChainLogin = () =>{
    setChain(1)
  }
  console.log(chain)
  const control = [
    <LoginComponent key="login" handleChain={handleChain}  />,
    <SignUpComponent key="signup" handleChainLogin={handleChainLogin}/>,
    <ForgotPasswordComponent key="forgot-password"  />,
    <UserDashboard key="dashboard" name={name}/>,
  ];
  return (
    <div>
      <Nav/>
      <BreadLink name="My Account" status={name}>My Account</BreadLink>
      {control[chain]}
      <Footer/>
      {width < 880 && <MobileNav/>}
    </div>
  )
}

export default Log;