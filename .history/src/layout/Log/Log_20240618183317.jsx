
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import LoginComponent from '../../components/join/LoginComponent';
import Nav from '../../components/nav/Nav'
import BreadLink from '../../components/reuseable/breadlink/BreadLink';
import ForgotPasswordComponent from '/src/components/join/ForgotPasswordComponent'
import UserDashboard from '../../components/dashboard/UserDashboard';
function Log() {
  const [logged, setLogged] = useState()
  const [chain, setChain] = useState(0)

  useEffect(() => {
    if(logged){
      setChain(2)
    }
  }, [logged])
  
  const handleChain = () =>{
    setChain(1)
  }
  console.log(chain)
  const control = [
    <LoginComponent key="login" handleChain={handleChain} />,
    <ForgotPasswordComponent key="forgot-password" />,
    <UserDashboard key="dashboard"/>
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