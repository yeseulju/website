import React from 'react';
import './Instructor.css'
import Navbar from '../../Components/Navbar/Navbar';
import instructorImg from '../../assets/user-1.png'; // Update the path if necessary

const instructors = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: `Instructor ${i + 1}`,
  image: instructorImg,
}));

const Instructor = () => {
  return (
    <div className='page-container'>
      <Navbar />
      <div id='instructors'>
        <div className='instructors'>
          {instructors.map((instructor) => (
            <div key={instructor.id} className='instructor'>
              <h3>{instructor.name}</h3>
              <img src={instructor.image} alt={instructor.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instructor;
