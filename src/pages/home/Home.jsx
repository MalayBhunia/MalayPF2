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
        </div>

        <div className="color-block"></div>
      </section>
    );
  };
export default Home;