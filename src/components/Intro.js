import React from 'react';
import './Intro.css';
import avatar from "../img/myAvatarWhiteShirt.png";

export default function Intro() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="i">
        <div className="i-left"> 
            <div className="i-left-wrapper">
                <h2 className='i-intro'>
                    Hello, my name is
                </h2>
                <h1 className='i-name'>
                    Shifra Wagshall 
                </h1>

                <div className='i-title'> 
                    <div className='i-title-wrapper'> 
                        <div className='i-title-item'> FullStack Developer</div>
                        <div className='i-title-item'> Accounting Tutor</div>
                    </div>

                </div>
                <p className='i-description'>
                    I am a FullStack Developer who is eager to learn and code. 
                </p>
            </div>
        </div>
        <div className="i-right"> 
            <div className='i-bg'></div>
            <img src={avatar} alt='My avatar' className='i-img' />
        </div>
      
    </div>
  );
}