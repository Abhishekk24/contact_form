


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

export const Contact = () => {
  const form = useRef();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c9dqv6o', 'template_8dmwkll', form.current, 'BKx0mrH1KYZuedICQ')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="text-zone">
          <h1>CONTACT ME :)</h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious or large projects.
            However, if you have any other requests or questions, don't hesitate to contact me using
            the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>

              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="user_subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>


      </div>

      <div className="dark-light-toggle">
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} value = "Mode"/>
          <span className="slider round"></span>
        </label>
      </div>

    </>
  );
};

export default Contact;
