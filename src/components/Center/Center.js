import React from 'react';
import './Center.css';
import man from "../../assets/man.png"


function Center({ homeRef }) {
  return (
    <section ref={homeRef}>
    <div className="center-container">
      <h1 className="center-title">Let`s try to do</h1>
      <div className="center-content">
        <p>Hi, I`m George Voina. A passionate Web Developer based in Romania.</p>
        <div className='social-icons'>
          <a href="https://github.com/Nescrai"><i className='fab fa-github'></i></a>
          <a href="https://www.linkedin.com/in/george-voina-a1521a241"><i className='fab fa-linkedin'></i></a>
        </div>
        <div className='image'>
        <img src={man} alt="image" />
        </div>
      </div>
    </div>
    </section>
  );
}

export default Center;
