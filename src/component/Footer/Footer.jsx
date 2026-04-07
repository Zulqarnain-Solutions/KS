import { Link } from "react-router-dom"


export default function Footer() {
  return (
    <>
     {/* <!-- Footer --> */}
      <footer className="footer">
        <div className="footer-container">

            {/* <!-- Left Section --> */}
            <div className="footer-section">
                <div className="logo">
                    <span className="logo-icon">K</span> 
                    <span className="logo-text">Ks Institute<br/><small>Technology & Languages</small></span>
                </div>
                <p className="desc">
                    Empowering students with professional skills in technology and languages for a successful future.
                </p>
            </div>

            {/* <!-- Middle Section --> */}
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Our Founder</Link></li>
                    <li><Link to="#">Expert Teachers</Link></li>
                    <li><Link to="#">Courses</Link></li>

                </ul>
            </div>

            {/* <!-- Right Section --> */}
            <div className="footer-section">
                <h4>Contact Info</h4>
                <ul className="contact">
                    <li><i className="fi fi-rs-envelope"></i> info@ksinstitute.edu</li>
                    <li><i className="fi fi-rs-phone-call" /> +92 3055555056</li>
                    <li><i className="fi fi-rs-marker" /> shaheen town Islambad</li>
                </ul>
            </div>

        </div>

        <div className="footer-bottom">
            © 2026 Ks Institute of Technology and Languages. All rights reserved.
        </div>
      </footer>
    </>
  )
}
