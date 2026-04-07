import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendMessage } from "../../api/authApi";
import Model from "../Header/Model";

export default function ContactForm() {

  const [modelIsOpen, setModelIsOpen] = useState(false);

    const { register, handleSubmit, formState: {errors} } = useForm()

    const onSubmit = async (data) => {
        console.log(data.userName);

        try {
          const response = await sendMessage(data);
          console.log(response?.statusCode);

          if(response?.statusCode == 200){
              setModelIsOpen(true);
          }
        } catch (error) {
          console.log("Something went wrong while sending message", error.message)
        }
    }


  return (
    <>
      {/* <!-- Contact form --> */}
      <section className="contact-section">
        <h1 className="heading">
          Get In <span>Touch</span>
        </h1>
        <p className="subtitle">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>

        <div className="contact-container">
          {/* <!-- Left Form --> */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" 
              {...register("userName", { required: "Name is required"})}
              />
              {errors.name && <p className="error-Message">{errors.name.message}</p>}

              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" 
              {...register("email", { required: "Email is required"})}
              />
               {errors.email && <p className="error-Message">{errors.email.message}</p>}


              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" 
              {...register("phoneNumber", { required: "phone number is required"})}
              />
               {errors.phoneNumber && <p className="error-Message">{errors.phoneNumber.message}</p>}


              <label>Message</label>
              <textarea placeholder="Tell us about your inquiry..."
              {...register("message", { required: "Message is required"})}
              ></textarea>
               {errors.message && <p className="error-Message">{errors.message.message}</p>}


              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* <!-- Right Info --> */}
          <div className="contact-info">
            <div className="info-box">
              <div>
                <i className="fi fi-rs-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@kisstitute.edu</p>
                <p>contact@kisstitute.edu</p>
              </div>
            </div>

            <div className="info-box">
              <div>
                <i className="fi fi-rs-phone-call"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+92 300 1234567</p>
                <p>+92 301 7654321</p>
              </div>
            </div>

            <div className="info-box">
              <div>
                <i className="fi fi-rs-marker"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>
                  KIS Institute of Technology and Languages
                  <br />
                  Pakistan
                </p>
              </div>
            </div>

            <div className="info-box">
              <div>
                <h4>Office Hours</h4>
                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Model 
      modelIsOpen={modelIsOpen}
      setModelIsOpen={setModelIsOpen}
      >
        <h3>Message send successfully</h3>
      </Model>
    </>
  );
}
