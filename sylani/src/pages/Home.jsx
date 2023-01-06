import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Blog from '../Components/Blog/Blog'
import Footer from '../Components/Footer/Footer'
import Gallery from '../Components/Gallery'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Gallery/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home