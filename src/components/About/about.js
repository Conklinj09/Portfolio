import React from 'react';
import headshot from "../../assets/images/headshot.jpg"
import "../../App.css" 

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <i className="fas fa-user-circle" style={{ fontSize: "100px" }}></i>
        </div>
      </div>
      <div className='about-me'>
        <p>
         Hello my name is Jeanette Conklin. 
         I am proud CSUN graduate with a BA in Psychology. 
         Additionally, I am also a UCLA extension graduate,
         equipped with a certificate in Full Stack Development.
         I love to bake and watch The British Baking Show.
         I also love to go swimming to stay in shape.
         In the past I was a Swim Instructor while I was in college.
         My favorite hobbies are doing yoga, and swimming to stay in shape.
        

        </p>
      <img src={headshot} className="headshot" alt="headshot" style={{maxWidth:"250px !important"}}/>
      </div>
    </section>
  );
}

export default About;
