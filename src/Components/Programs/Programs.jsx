import React from 'react';
import './Programs.css';
import program_g from '../../assets/group.webp';
import program_p from '../../assets/private.webp';

const Programs = () => {
  return (
    <div id='programs' className='programs'>
      <div className="program">
        <img src={program_g} alt="Group Class" />
        <div className="caption">
          <h3>Group Class</h3>
          <p>Pricing: $100</p>
          <p>Session: Weekly sessions</p>
        </div>
      </div>
      <div className="program">
        <img src={program_p} alt="Private Class" />
        <div className="caption">
          <h3>Private Class</h3>
          <p>Pricing: $150</p>
          <p>Session: Individual sessions</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
