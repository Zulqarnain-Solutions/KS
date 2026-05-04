import React from 'react'
import About from '../../features/About/About.jsx'
import Hero from '../../features/HeroSection/Hero.jsx'
import Courses from '../../features/Courses/Courses.jsx'
import ContactForm from '../../component/ContactForm/ContactForm'
import Footer from '../../component/layout/Footer/Footer.jsx'
import Founder from '../../features/Founder/Founder.jsx'

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
