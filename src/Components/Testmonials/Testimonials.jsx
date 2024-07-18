import React, { useRef } from 'react'
import './Testimonials.css'

import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
     
       const slider = useRef ();
       let tx = 0;

    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
         slider.current.style.transform = `translateX(${tx}%)`

    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
         slider.current.style.transform = `translateX(${tx}%)`

    }

  return (
    <div id='testimonials'>
        
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Jessica Pang</h3>
                                <span>Toronto.CA</span>
                            </div>
                        </div>
                        <p>I feel great after taking the class. 
                            Prior to starting Pilates I always had stiff joints in the morning and soreness on a regular basis.
                            Now I can move in the mornings with no muscle or joint stiffness which is awesome. 
                            I feel stronger and in better health overall since attending!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Chloe Ju</h3>
                                <span>Toronto.CA</span>
                            </div>
                        </div>
                        <p>I feel great after taking the class. 
                            Prior to starting Pilates I always had stiff joints in the morning and soreness on a regular basis.
                            Now I can move in the mornings with no muscle or joint stiffness which is awesome. 
                            I feel stronger and in better health overall since attending!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Haizel Han</h3>
                                <span>Toronto.CA</span>
                            </div>
                        </div>
                        <p>I feel great after taking the class. 
                            Prior to starting Pilates I always had stiff joints in the morning and soreness on a regular basis.
                            Now I can move in the mornings with no muscle or joint stiffness which is awesome. 
                            I feel stronger and in better health overall since attending!
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Ivy Chung</h3>
                                <span>Toronto.CA</span>
                            </div>
                        </div>
                        <p>I feel great after taking the class. 
                            Prior to starting Pilates I always had stiff joints in the morning and soreness on a regular basis.
                            Now I can move in the mornings with no muscle or joint stiffness which is awesome. 
                            I feel stronger and in better health overall since attending!
                        </p>
                    </div>
                </li>
            </ul>
            </div>

    </div>
  )
}

export default Testimonials
