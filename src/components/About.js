import React, { useState } from "react";
import "../App.css";

function About() {
  const [state, setstate] = useState(false);
  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 350) {
      setstate(true);
    } else {
      setstate(false);
    }
  };
  window.addEventListener("scroll", changeClass);

  return (
    <div className='About'>
      <section data-aos='fade-right'>
        <h1>
          We reimagine marine propulsion, setting course for better currents.
        </h1>
      </section>

      <section>
        <img className={state ? "heroimg" : ""} src='./boat.png' />
      </section>

      <section data-aos='fade-left'>
        <p>
          The first cars were designed to look like horse-drawn carriages,
          without the horses. Because that’s what people knew. When designing
          our electric in- and outboard motors, we wouldn’t make that mistake.
        </p>

        <p>
          Sure, we weren’t the only ones to see what’s wrong with fossil fuel
          powered motors. The noise, pollution and maintenance. However, most
          motor companies simply replaced internal combustion engines with an
          electric motor and called it a day. They made do. That’s not us.
        </p>

        <p>
          We don’t make do, we do better. We are at the dawn of the Electric
          Age. And it’s a great time to come aboard.
        </p>
      </section>

      <section>
        <p>The Saietta group</p>
        <h2>Driven to go further faster.</h2>
      </section>

      <section data-aos='fade-up'>
        <img src='./img1.png' />
      </section>

      <section>
        <p>
          Propel is part of the Saietta Group, and develops electric marine
          propulsion solutions from its Amsterdam office based on Saietta
          technology such as its Axial Flux Technology motors.
        </p>
      </section>

      <section data-aos='fade-up'>
        <img src='./img2.png' />
      </section>

      <section>
        <p>
          Saietta Electric Drive is accelerating the pace and depth of change
          towards electric mobility where societies need it most. Our purpose is
          simple and ambitious — to help drive the world further and faster
          towards a more sustainable and prosperous future.
        </p>
      </section>

      <section data-aos='fade-up'>
        <img src='./img3.png' />
      </section>
    </div>
  );
}

export default About;
