import React from 'react'
import About from '../../component/About/About'
import Hero from '../../component/HeroSection/Hero'
import Founder from '../../component/Founder/Founder'
import Courses from '../../component/Courses/Courses'
import ContactForm from '../../component/ContactForm/ContactForm'
import Footer from '../../component/Footer/Footer'

export default function Home() {
  return (
    <>
        {/* <!-- Hero Section --> */}
        <Hero />

        {/* <!-- About Section --> */}
        <About />

        {/* <!-- Founder Section --> */}
        <Founder />

        {/* <!-- Courses Section --> */}
        <Courses />

        {/* <!-- Contact Section --> */}
        <ContactForm />

        {/* <!-- Footer --> */}
        <Footer />
    </>
  )
}
