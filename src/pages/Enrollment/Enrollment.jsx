import React, { useState } from 'react'
import './enrollment.css'
import CoursesImg from '/CoursesImg.jpg'
import { useLocation } from 'react-router-dom'
import { enroll } from '../../api/authApi';
import Model from '../../component/Header/Model';
import { useAuth } from '../../contexts/AuthContext';
import Login from "../../component/Login/Login.jsx"

export default function Enrollment() {

  const { user } = useAuth();
  // Model state
  const [modelIsOpen, setModelIsOpen] = useState(false)

  // Handle Click 
  const [ handleClick, setHandleClick ] = useState(false);

  // Enroll State
  const [enrollMessage, setEnrollMessage] = useState()
/// Get data from link state 
const { state } = useLocation();
// console.log(state);

const handleSubmit = async () => {

  setHandleClick(true);
  
  if(!user) {
    setModelIsOpen(true);
    setHandleClick(false);
     return;
  }
   
  
  console.log("Helo Enroll")
  try {
      const data = await enroll({ 
      courseId: state._id,
    });

    console.log(data.statusCode);
    if ( data.statusCode == 200){
      setModelIsOpen(true);
      setEnrollMessage("Succesfully enroll in course");
    }

    // console.log(data);

  } catch (error) {
    setHandleClick(false)
    console.log("Something went wrong while enrollment " , error.message)
  }
}

  return (
    <>
     <div className="enroll-header">
    Course Enrollment
  </div>

  <div className="enroll-container">
    <div className="course-card">

      {/* <!-- Course Image --> */}
      <img src={`${state.thumbnail}`} className="thumbnail" alt="Course Thumbnail" />

      {/* <!-- Content --> */}
      <div className="content">

        <div className="title">{state.title}</div>
        <div className="subtitle" style={{textAlign:'left'}}>{state.description}</div>

        {/* <!-- Info --> */}
        <div className="info">
          <div>⏱ Duration: 8 Weeks</div>
          <div>📚 Level: {state.level}</div>
        </div>

        {/* <!-- Description --> */}
        <div className="description">
          {state.description}
          </div>

        {/* <!-- What You'll Learn --> */}
        {/* <div className="list">
          <h3>What You'll Learn</h3>
          <ul>
            <li>HTML5, CSS3 & Responsive Design</li>
            <li>JavaScript & DOM Manipulation</li>
            <li>Backend Development Basics</li>
            <li>Real-world Project Building</li>
          </ul>
        </div> */}

        {/* <!-- Requirements --> */}
        {/* <div className="list">
          <h3>Requirements</h3>
          <ul>
            <li>Basic computer knowledge</li>
            <li>No prior coding experience needed</li>
          </ul>
        </div> */}

        {/* <!-- Enroll Button --> */}
        <div className="enroll-section">
          <button 
          className="enroll-btn" 
          onClick={handleSubmit} 
          disabled = {handleClick}
          >
            Enroll Now
          </button>
        </div>

      </div>
    </div>
  </div>

  <Model 
  modelIsOpen={modelIsOpen}
  setModelIsOpen={setModelIsOpen}
  >
    {
      user? 
    <h3>{enrollMessage}</h3>
    :
    <Login />
    }
    
  </Model>

    </>
  )
}
