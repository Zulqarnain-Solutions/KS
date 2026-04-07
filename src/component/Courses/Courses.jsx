import React, { useId, useState } from "react";
import { useCourse } from "../../contexts/CourseContext";
import { Link } from "react-router-dom";
import Model from "../Header/Model";

export default function Courses() {

  const keyId = useId();

  const { course } = useCourse();
//   console.log(course?.data);

const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};


  return (
    <>
      {/* <!-- Courses Section --> */}
      <section className="courses">
        <div className="container">
          <h2 className="heading">
            Our <span>Courses</span>
          </h2>
          <p className="subtitle">
            Comprehensive programs designed to equip you with industry-relevant
            skills
          </p>

          <div className="course-grid">
            {/* <!-- Card 1 --> */}
            {
                course?.data?.map( data => (
                    
                      <div className="course-card" key={data._id}>
                            <div className="card-image" >
                                <img src={`${data.thumbnail}`} alt="" />
                              <span className="tag">Technology</span>
                            </div>
                            <h3>{toTitleCase(data.title)}</h3>
                            <p>{data.description}</p>
                            <div className="badges">
                              <span className="text-5xl">Rs. {data.price}</span>
                              {/* <span>Animation</span>
                              <span>Rendering</span>
                              <span>Texturing</span> */}
                            </div>
                           <Link to="/courses/enroll" state={data}> <button>Enroll Now</button></Link>
                        </div> 
                        
                ))
             
            }
          </div>

          <div className="cta">
            <h3>Ready to Start Learning?</h3>
            <p>
              Join our institute and take the first step towards a successful
              career in technology and languages.
            </p>
            <Link to="/courses/enroll">Get Started Today</Link>
            
          </div>
        </div>
      </section>
    </>
  );
}
