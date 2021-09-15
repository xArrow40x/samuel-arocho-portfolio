import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/greenamonia.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/portfolio.jpg'

import { Link } from "gatsby"
import { FaReact } from '@react-icons/all-files/fa/FaReact'
import { FaJava } from '@react-icons/all-files/fa/FaJava'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaDatabase } from '@react-icons/all-files/fa/FaDatabase'
import { FaPython } from '@react-icons/all-files/fa/FaPython'
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs'
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5'
// import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
// import { FaGithub } from '@react-icons/all-files/fa/FaGithub'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    const contactIcons =
      <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/samuel-arocho/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ninesevenphotos/?hl=en" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hey, Samuel here. I'm a Boston native through and through. Went to Northeastern
            University and finished with a degree in Counseling Psychology. I believed I would
            become a therapist, but here I am pursuing a career in TECH. I believe the skills I've
            learned through years working in education and non-profits will allow me to... 
          </p>
          <p>
            I've spent the vast majority of the past 3 years learning and honing my skills/interests
            in the TECH space. I built a few computer towers, am always reading up on new 
            technologies that are permeating different parts of our lives; things from Disney's high 
            tech wrist bands for their theme parks, to the latest kinds of 3D engines being run by 
            game developers and movie creators. And now, with so many different languages, frameworks, and 
            tools at our disposal these days, it's been great learning a few of them and 
            seeing how they can each contribute projects in a unique way.
          </p>
          <p>
            Feel free to check out the projects I've worked on! I'm always looking to grow and improve my
            knowledge so feel free to contact me about what you see, or if you have a cool idea and need some help!
          </p>
          <p>
            Here are a few of the tools/languages I've worked with <i>(not all are listed)</i>:
          </p>
          <ul id= 'list' style={{listStyle: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
            <li><FaReact/></li>
            <li><FaJava/></li>
            <li><FaGithub/></li>
            <li><FaDatabase/></li>
            <li><FaPython/></li>
            <li><FaNodeJs/></li>
            <li><FaJava/></li>
            <li><FaHtml5/></li>
          </ul>
          {contactIcons}
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <Link to="https://greenamonia.herokuapp.com/"><img src={pic04} alt="Website Screenshot" /></Link>
            <FaGithub/> <FaReact/><FaHtml5/>
          </span>
          <h4>Personal Project</h4>
          <text>Portfolio</text>
          <br/>
          <p style={{
            fontStyle: 'italic'
          }}>
            Please allow time for initial load. Click <Link to='https://github.com/xArrow40x/samuel-arocho-portfolio'>here</Link> for the Github repository.
          </p>
          <p>
            This is a personal website created to hold and showcase some of the projects I've worked on, and the places I've worked. It is also a place to display some of the photos I've taken
            throughout my personal adventures. This site is still ACTIVELY being updated.
          </p>
          <span className="image main">
            <Link to="https://greenamonia.herokuapp.com/"><img src={pic02} alt="Website Screenshot" /></Link>
            <FaGithub/> <FaReact/> <FaJava/> <FaDatabase/>
          </span>
          <h4>Launch Academy Project</h4>
          <text>Review Site: "Greenamonia"</text>
          <br/>
          <p style={{
            fontStyle: 'italic'
          }}>
            Please allow time for initial load. Click <Link to='https://github.com/xArrow40x/local-parks-review'>here</Link> for the Github repository.
          </p>
          <p>
            This is a review site of all the national parks in the MA, NH, and VT areas using The National Park Service's API endpoint. React frontend, Java backend.
          </p>
          <span className="image main">
            <img src={pic03} alt="" />
            <FaGithub/> <FaReact/> <FaDatabase/>
          </span>
          <h4>Launch Academy Project</h4>
          <text>React Storefront</text>
          <br/>
          <p style={{
            fontStyle: 'italic'
          }}>
            Please allow time for initial load. Click <Link to='https://github.com/xArrow40x/react_storefront'>here</Link> for the Github repository.
          </p>
          <p>
            This is a simple storefront created almost exclusively in React with a simple Express.js backend. This site is NOT currently LIVE.
          </p>
          
          {contactIcons}
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <h4><Link to='https://www.wayfair.com/'>Wayfair, LLC</Link></h4>
                <text>Software Analyst/Render Support Engineer</text>
                <br/>
                <text>July 2020-July 2021</text>
                <br/>
                <br/>
                <p>
                •	Responded to critical issues and performed investigation to resolve them and/or assign them to appropriate engineer/artists <br/>
                •	Maintained prioritization of render jobs on the render farm (Deadline) and Maxscript jobs in the 3D application queue (OpenCue) <br/>
                •	Troubleshot and monitored render farm and 3D application farm health <br/>
                •	Created Grafana graphs for more accurate monitoring and reporting or render farm health status <br/>
                •	Coordinated daily statistical updates of render farm data for stakeholder monitoring <br/>
                •	Investigated an average of 50+ 3D scene files for errors daily <br/>
                •	Scripted (Maxscript and Python3) code to automate daily tasks <br/>
                </p>
          <br/>
          <h4><Link to='https://apprenticareers.org/'>Apprenti</Link>/<Link to='https://launchacademy.com/'>Launch Academy</Link></h4>
                <text>Software Development Apprentice</text>
                <br/>
                <text>Jan 2020-July 2021</text>
                <br/>
                <br/>
                <p>
                •	Federally Registered Apprenticeship Program approved by the Department of Labor <br/>
                •	Maintained prioritization of render jobs on the render farm (Deadline) and Maxscript jobs in the 3D application queue (OpenCue) <br/>
                •	Troubleshot and monitored render farm and 3D application farm health <br/>
                •	Created Grafana graphs for more accurate monitoring and reporting or render farm health status <br/>
                •	Coordinated daily statistical updates of render farm data for stakeholder monitoring <br/>
                •	Investigated an average of 50+ 3D scene files for errors daily <br/>
                •	Scripted (Maxscript and Python3) code to automate daily tasks <br/>
                </p>
          <br/>
          <h4><Link to='https://bostonpic.org/'>The Boston Private Industry Council, Inc</Link></h4>
                <text>Postsecondary Transitional Coach</text>
                <br/>
                <text>May 2016-June 2019</text>
                <br/>
                <br/>
                <p>
                •	Provided one-on-one coaching to improve college retention and career exploration <br/>
                •	Assisted in the development of life skills, leadership skills, and organizational skills in students to navigate college <br/>
                •	Connected students with available services regarding FAFSA and scholarships, college admission, course selection and advising, academic tutoring, resume and interview preparation, and more<br/>
                •	Collaborated with PIC Staff to deliver annual new student orientation and summer series of college preparation and team building workshops <br/>
                •	Created and maintained working relationships with educational institutions where cohort(s) of students attend<br/>
                •	Tracked student contact information, academic progress, and attendance at group and individual meetings in order to ensure delivery of services and develop reports via Salesforce<br/>
                </p>
          <br/>
          <h2>Education</h2>
          <h4><Link to='https://launchacademy.com/'>Launch Academy</Link></h4>
                <text>Software Developer Track</text>
                <p>
                •	Certificate of completion for Full Stack Software Developer <br/>
                </p>
          <h4><Link to='https://www.northeastern.edu/'>Northeastern University</Link></h4>
                <text>B.S. Counseling Psychology</text>
                <p>
                •	Minor: Latino/a American and Caribbean Studies<br/>
                </p>
            {contactIcons}
          {close}
        </article>

        <article
          id="photography"
          className={`${this.props.article === 'photography' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Photography</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Coming Soon! In the meantime, check out my <a href="https://www.instagram.com/ninesevenphotos/?hl=en">Instagram</a> for my photos!
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          {contactIcons}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
