import React from 'react'

export default function Teacher() {
  return (
    <>
        {/* <!-- Teacher --> */}
        <section className="teachers">
        <div className="container">
            <h2 className="heading">Our Expert <span>Teachers</span></h2>
            <p className="subtitle">
            Learn from industry professionals with years of practical experience and passion for teaching
            </p>

            <div className="teacher-grid">

            {/* <!-- Card 1 --> */}
            <div className="teacher-card">
                <img src="pic.jpg" alt="Ammar Khalid" />
                <h3>Ammar Khalid</h3>
                <span className="role">Professional expert in 3D Modelling</span>
                <p>
                Specialized in creating stunning 3D models and animations with industry standard tools and techniques.
                </p>
                <div className="tags">
                <span>3D Modeling</span>
                <span>Animation</span>
                <span>Rendering</span>
                </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="teacher-card">
                <img src="pic1.jpg" alt="Zulqarnain Zameer" />
                <h3>Zulqarnain Zameer</h3>
                <span className="role">Software Engineer</span>
                <p>
                Expert in building modern, scalable web applications using cutting edge technologies and best practices.
                </p>
                <div className="tags">
                <span>Web Development</span>
                <span>React</span>
                <span>Node.js</span>
                </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="teacher-card">
                <img src="pic2.jpg" alt="Uzair" /> 
                <h3>Uzair</h3>
                <span className="role">Professional Designer</span>
                <p>
                Creating beautiful and functional designs that enhance user experience and brand identity.
                </p>
                <div className="tags">
                <span>UI/UX Design</span>
                <span>Branding</span>
                <span>Visual Design</span>
                </div>
            </div>

            {/* <!-- Card 4 --> */}
            <div className="teacher-card">
                <img src="pic.jpg" alt="Umar" />
                <h3>Umar</h3>
                <span className="role">3D Modeler and Designer</span>
                <p>
                Combining artistic vision with technical expertise to create impressive 3D designs and models.
                </p>
                <div className="tags">
                <span>3D Design</span>
                <span>Product Modeling</span>
                <span>Texturing</span>
                </div>
            </div>

            {/* <!-- Card 5 --> */}
            <div className="teacher-card">
                <img src="pic3.webp" alt="Taha" />
                <h3>Taha</h3>
                <span className="role">Expert Graphics Designer</span>
                <p>
                Delivering creative graphic design solutions for digital and print media with attention to detail.
                </p>
                <div className="tags">
                <span>Graphic Design</span>
                <span>Adobe Suite</span>
                <span>Print Design</span>
                </div>
            </div>

            </div>
        </div>
        </section>
    </>
  )
}
