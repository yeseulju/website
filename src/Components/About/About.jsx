import React from 'react';
import './About.css';
import Navbar from '../../Components/Navbar/Navbar'; // Import Navbar component
import about_img from '../../assets/about.jpg';


const About = () => {
  return (
    <div id='about'>
      <Navbar /> {/* Include Navbar component */}
      <div className="about-left">
        <img src={about_img} alt="About University" className='about-img' />
        
      </div>
      <div className="about-right">
        <h3>PilatesBuddy</h3>
        <h2>Our Team</h2>
        <p>
        Our team of talented and passionate instructors are at the core of what makes Serenev Studio extraordinary. 
        Each instructor brings expertise and enthusiasm to create engaging classes that cater to all levels. 
        From beginner to advanced, we offer classes with modifications, ensuring a challenging yet accessible fitness journey for everyone. 
        
        </p>
        <p>
        Our goal is to create an inclusive and supportive environment where you can thrive and feel empowered in your wellness journey.
        Step into our studio, and you’ll be greeted by an atmosphere of warmth and tranquility. Serenev Studio is more than just a fitness space; 
        it’s a welcoming haven where you can leave the stresses of daily life behind and focus on nurturing your mind, body, and soul. 
        </p>
        <p>
        We believe in the power of mindfulness and self-care, and our studio is designed to be a place 
        where you can find balance and serenity amid the hustle and bustle of city life.

        </p>
      </div>
    </div>
  );
}

export default About;
