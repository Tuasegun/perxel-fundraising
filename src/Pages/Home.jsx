import React from 'react'
import Benefits from '../Components/Benefits'
import Empower from '../Components/Empower'
import Footer from '../Components/Footer'
import Goals from '../Components/Goals'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Why from '../Components/Why'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Why/>
        <Benefits/>
        <Goals/>
        <Empower/>
        <Footer/>
    </div>
  )
}

export default Home