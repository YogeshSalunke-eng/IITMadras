import React from 'react'
import Hero from '../componts/Hero/Hero'
import Program from '../componts/Program/Program'
import About from '../componts/About/About'
import Campus from './campus/Campus'
import Testimonials from '../componts/Testimonials/Testimonials'
import Contact from '../componts/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <Program />
        <About/>
        <Campus />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default Home