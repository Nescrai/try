import React, { useRef } from "react";
import "./About.css";
import it from "../../assets/it.jpg";


function About({aboutRef}) {
 
  return (
    <div className="about-body">
      <section ref={aboutRef}> 
      <div className="wrapper">
        <img src={it} alt="" />
        <div className="text-box">
          <h2>About Me</h2>
          <h1>A dedicated Web Developer</h1>
          <p>
            As a Junior Web Developer, I possess an impressive arsenal of skills
            in HTML, CSS, JavaScript, React, Tailwind. I excel in designing and
            maintaining responsive websites that offer a smooth user
            erxperience. My expertise lies in crafting dynamic, engaging
            interfaces through writing cleand and optimized code and ultizing
            cuttin-edge development tools and techniques.
          </p>
        </div>
      </div>
     </section>
    </div>
  );
}

export default About;
