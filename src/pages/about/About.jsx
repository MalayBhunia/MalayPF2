import Info from "../../components/info";
import Cv from '../../pdf/M.Bhunia-Cv.pdf';
import { RiDownloadLine } from "react-icons/ri";
import Stats from "../../components/Stats";
import { skill } from "../../Data";
import SkillsItem from "../../components/SkillsItem";
import { resume } from "../../Data";
import ResumeItem from "../../components/ResumeItem";
import './about.css';

const About = () => {
    return (
      <main className="section container">
        <section className="about">
          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <div className="about-container grid">
            <div className="about-info">
              <h3 className="section-subtitle">Personal info</h3>

              <ul className="info-list grid">
                <Info/>
              </ul>

              <a href={Cv} download='' className="button">
                Download CV

                <span className="button-icon">
                  <RiDownloadLine />
                </span>
              </a>
            </div>

            <div className="stats grid">
              <Stats/>
            </div>
          </div>
        </section>

        <div className="separator"></div>

        <section className="skills">
          <h3 className="section-subtitle subtitle-center">My Skills</h3>

          <div className="skills-container grid">
            <div className="skills-group">
              <h3 className="skills-title">Frontend Developer</h3>

              <div className="skills-items grid">
                {skill.map((val) => {
                  if (val.category === 'developer') {
                    return <SkillsItem key={val.id}{...val}/>;
                  }
                })}
              </div>
            </div>

            <div className="skills-group">
              <h3 className="skills-title">Backend Developer</h3>

              <div className="skills-items grid">
                {skill.map((val) => {
                    if (val.category === 'designer') {
                      return <SkillsItem key={val.id}{...val}/>;
                    }
                })}
              </div>
            </div>
          </div>
        </section>

        <div className="separator"></div>

        <section className="resume">
          <h3 className="section-subtitle subtitle-center">
            Education & Experience
          </h3>

          <div className="resume-container grid">
            <div className="resume-group grid">
              {resume.map((val)=>{
                if (val.category === 'education'){
                  return <ResumeItem key={val.id}{...val} />;
                }
              })}
            </div>

            <div className="resume-group grid">
              {resume.map((val)=>{
                if (val.category === 'experience'){
                  return <ResumeItem key={val.id}{...val} />;
                }
              })}
            </div>
          </div>
        </section>
      </main>
    );
  };
export default About