import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import ItemsDisplay from '../components/ItemsDisplay'
import Chains from '../components/Chains'
import FirmCollection from '../components/FirmCollection'

const LandingPage = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Hero/>
      <ItemsDisplay />
      <Chains/>
      <FirmCollection/>
    </div>
  )
}

export default LandingPage
