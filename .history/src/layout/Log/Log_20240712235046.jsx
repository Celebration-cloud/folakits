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
function Log({name}) {
  const [logged, setLogged] = useState(true)
  const [chain, setChain] = useState(0)
  const { width } = useWidthSize();
  useEffect(() => {
    if(logged){
      setChain(2)
    }
  }, [logged])
  useCallback(
    () => {
      if (logged) {
        setChain(2);
      }
    },
    [logged],
  )
  
  
  const handleChain = () =>{
    setChain(1)
  }
  console.log(chain)
  const control = [
    <LoginComponent key="login" handleChain={handleChain} />,
    <ForgotPasswordComponent key="forgot-password" />,
    <UserDashboard key="dashboard" name={name}/>
  ];
  return (
    <div>
      <Nav/>
      <BreadLink name="My Account" status={name}>My Account</BreadLink>
      {control[chain]}
      <Footer/>
      {width < 880 && <MobileNav}
    </div>
  )
}

export default Log;