/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import LoginComponent from '../../components/join/LoginComponent';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink';
import ForgotPasswordComponent from '/src/components/join/ForgotPasswordComponent'
import UserDashboard from '../../components/dashboard/UserDashboard';
import useWidthSize from '../../components/reuseable/width/useWidthSize';
import MobileNav from '../../components/reuseable/mobileNav/MobileNav';
import SignUpComponent from '../../components/join/SignUpComponent';
import { useSelector } from 'react-redux';
function Log({name}) {
  const [logged, setLogged] = useState(false)
  const [chain, setChain] = useState(0)
  const { width } = useWidthSize();
  const { session } = useSelector((state) => state.user);

  useEffect(() => {
    if(session){
      setLogged(true)
    }
  }, [session])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if(logged){
      setChain(3)
    }
  }, [logged])
  // useCallback(
  //   () => {
  //     if (logged) {
  //       setChain(3);
  //     }
  //   },
  //   [logged],
  // )
  
  
  const handleChain = () =>{
    setChain(2)
  }
  const handleChainSignUp = () =>{
    setChain(1)
  }
  const handleChainLogin = () =>{
    setChain(0)
  }
  const control = [
    <LoginComponent
      key="login"
      handleChain={handleChain}
      handleChainSignUp={handleChainSignUp}
      setLogged={setLogged}
    />,
    <SignUpComponent key="signup" handleChainLogin={handleChainLogin} />,
    <ForgotPasswordComponent
      key="forgot-password"
      handleChainLogin={handleChainLogin}
    />,
    <UserDashboard key="dashboard" name={name} />,
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