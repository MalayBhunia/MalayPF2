import Profile from '../../assets/home.png';
import { Link } from 'react-router';
import { RiArrowRightUpLine } from "react-icons/ri";
import './home.css';
import {FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Home = () => {
    return (
      <section className='home-container grid'>
        <img src={Profile} alt="" className='home-img' />
      
        <div className='home-content'>
          <h1 className='home-title'>
            <span>I'm Malay Bhunia</span> <br /> Backend Developer
          </h1>

          <p className="home-description">
            I'm from Purba Medinipur. I'm studying my bachelor degree in Computer
            Science & Engineering from Swami Vivekananda University, Barrackpure. My strength are I’m a hard working,
            self motivating person.
          </p>
          <Link to='/about' className='button'>
            More About Me
            <span className='button-icon'>
              <RiArrowRightUpLine />
            </span>
          </Link>
          
          <div className='home__socials'>
            <a href="https://www.facebook.com/profile.php?id=100065094543831" className='home__social-link' target='_blank'>
                <FaFacebookF size={24}/>
            </a>

            <a href="https://www.instagram.com/mb.cse/" className='home__social-link' target='_blank'>
                <FaInstagram size={24}/>
            </a>

            <a href="https://www.linkedin.com/in/malay-bhunia-14ab712a6/" className='home__social-link' target='_blank'>
                <FaLinkedinIn size={24}/>
            </a>

            <a href="https://github.com/MalayBhunia" className='home__social-link' target='_blank'>
                <FaGithub size={24}/>
            </a>
          </div>
        </div>

        <div className="color-block"></div>
      </section>
    );
  };
export default Home;