import React from 'react'
import "./About.css"
import { useCourse } from '../../contexts/CourseContext'
import Courses from '../Courses/Courses'
import Hero from '../HeroSection/Hero'
import ContactForm from '../ContactForm/ContactForm'
import Founder from '../Founder/Founder'
import Footer from '../Footer/Footer'

export default function About() {

  return (
   <>

    {/* <!-- About Section --> */}
    <section id="about" className="about">

        <h2 className="heading">About <span>Our Institute</span></h2>
        <p className="subtitle">
            Building careers through professional education in technology and languages
        </p>

        <div className="about-cards">

            <div className="about-card">
                <div className="icon">🎯</div>
                <h3>Our Mission</h3>
                <p>
                    To provide industry-level professional education that empowers students
                    with practical skills and knowledge in technology and languages, preparing
                    them for successful careers.
                </p>
            </div>

            <div className="about-card">
                <div className="icon">👁️</div>
                <h3>Our Vision</h3>
                <p>
                    To become a leading institute recognized for excellence in technology and
                    language education, creating professionals who drive innovation and
                    global communication.
                </p>
            </div>

            <div className="about-card">
                <div className="icon">💡</div>
                <h3>Our Approach</h3>
                <p>
                    Hands-on learning with expert instructors, modern curriculum, and
                    real-world projects that ensure students gain practical experience and
                    industry-ready skills.
                </p>
            </div>

        </div>

        <div className="offer-box">
            <h3>What We Offer</h3>

            <div className="offer-grid">

                <div className="offer-item">
                    <h4>Technology Courses</h4>
                    <p>
                        Professional training in 3D Modeling, Web Development, Graphics Design,
                        and Digital Marketing
                    </p>
                </div>

                <div className="offer-item">
                    <h4>Language Programs</h4>
                    <p>
                        Expert English language instruction for professional and academic success
                    </p>
                </div>

                <div className="offer-item">
                    <h4>Expert Instructors</h4>
                    <p>
                        Learn from industry professionals with years of practical experience
                    </p>
                </div>

                <div className="offer-item">
                    <h4>Modern Curriculum</h4>
                    <p>
                        Up-to-date course content aligned with current industry standards and trends
                    </p>
                </div>

            </div>
        </div>

    </section>

   </>
  )
}
