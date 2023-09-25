import React from 'react';
import aboutSvg from '../assets/about.svg';
import { SectionTitle } from './SectionTitle';

export const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='laptop-image' className='w-full h-64'></img>
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            I'm a passionate web developer with a unique blend of skills and
            experiences. While my background includes a successful career in
            commercial aviation and hospitality, my true calling lies in the
            world of web development. I'm currently honing my skills as a
            Student Software Engineer at Springboard, where I'm immersed in
            mastering modern programming languages, web development, and
            software design principles. Through real-world projects and a
            hands-on curriculum, I've sharpened my problem-solving abilities and
            fostered teamwork in a virtual environment. What sets me apart is my
            strong foundation in customer service, adaptability, and
            communication, developed during my time as a Flight Attendant with
            Emirates, Turkish Airlines, and TUI. Providing exceptional in-flight
            passenger service in multicultural settings has taught me the value
            of exceeding expectations. My passion for technology and aviation
            fuels my desire to contribute to innovative and impactful projects
            in both sectors. I stay updated with tech trends, continuously
            embrace new problem-solving challenges, and hold certifications in
            social media management, administrative professional foundations,
            and social media marketing. I'm excited to combine my tech skills
            and aviation expertise to bring a unique perspective to your team.
            Let's collaborate and build something exceptional together!
          </p>
        </article>
      </div>
    </section>
  );
};
