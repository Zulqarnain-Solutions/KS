import CEOImg from '/Img.png'

export default function Founder() {
  return (
    <>
    {/* <!-- Founder Section --> */}
        <section className="founder-section">
          <h2 className="heading">Meet Our <span>Founder</span></h2>
          <p className="subtitle">Visionary leader and expert educator driving excellence in education</p>
    
          <div className="founder-card">
            <div className="founder-img">
              {/* <!-- Replace with real image --> */}
              <img src={`${CEOImg}`} alt="Founder Image" />
            </div>
    
            <div className="founder-info">
              <h3>Kashif Khan</h3>
              <p className="founder-role">Owner & Expert Teacher</p>
    
              <p className="founder-desc">
                With years of professional experience and a passion for education,
                Kashif Khan founded Ks Institute to provide world-className training 
                in technology and languages. His expertise spans multiple disciplines, 
                making him a versatile educator committed to student success.
              </p>
    
              <p className="expertise-title"> <i className="fi fi-rs-book-alt"></i> Areas of Expertise</p>
    
              <div className="expertise-badges">
                <span>English Language</span>
                <span>Graphics Design</span>
                <span>Digital Marketing</span>
              </div>
    
              <div className="leader-box">
                <h4> <i className="fi fi-rs-arrow-trend-up"></i>Leadership Philosophy</h4>
                <p>
                  "Education is not just about learning skills, it's about transforming lives 
                  and creating opportunities for a brighter future."
                </p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
