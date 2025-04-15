import Profile from '../../assets/home.png';
import { Link } from 'react-router';
import { RiArrowRightUpLine } from "react-icons/ri";
import './home.css';

const Home = () => {
    return (
      <section className='home-container grid'>
        <img src={Profile} alt="" className='home-img' />

        <div className='home-content'>
          <h1 className='home-title'>
            <span>I'm Malay Bhunia</span> <br /> Fullstack Developer
          </h1>

          <p className="home-description">
            I am a Tunisian based web designer & front-end developer focused on
            crafting clean & user-friendly experiences, I am passionate abou 
            building excellent software that improves the lives of those around 
            me.
          </p>
          <Link to='/about' className='button'>
            More About Me
            <span className='button-icon'>
              <RiArrowRightUpLine />
            </span>
          </Link>
        </div>

        <div className="color-block"></div>
      </section>
    );
  };
export default Home;