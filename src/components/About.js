import React from 'react';
import "./About.css";




export default function About() {
  return (
    <div className='a'>
      <div className="a-left"> 
        <div className="a-card bg"></div>
            <div className="a-card">
            <img
            src="https://santacruzparent.com/wp-content/uploads/2021/06/coding.jpg"
            alt="code img"
            className="a-img"
          />
        </div>
      </div>

      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I LOVE CODING!
        </p>
        <p className="a-desc">
                    My name is Shifra Wagshall, I am 22 years old and live in Brooklyn, New York.
                    I am a recent graduate of Touro College, I have a degree in Business Management
                    Administration Information Systems:Programming. My internship was in FullStack development, and I
                    really
                    enjoyed it.
                    I am currently enrolled in Columbia Engineering FullStack boot camp, as I would like to specialize
                    in
                    FullStack development. Some of my hobbies include reading and baking.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
    
  );
}