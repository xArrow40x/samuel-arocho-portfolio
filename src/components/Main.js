import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import { Link } from "gatsby"

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
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
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
            <img src={pic02} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
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
          <h4 style={{
            margin: '0'
          }}><Link to='https://www.wayfair.com/'>Wayfair, LLC</Link></h4>
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
          <h4 style={{
            margin: '0'
          }}><Link to='https://apprenticareers.org/'>Apprenti</Link>/<Link to='https://launchacademy.com/'>Launch Academy</Link></h4>
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
          <h4 style={{
            margin: '0'
          }}><Link to='https://bostonpic.org/'>The Boston Private Industry Council, Inc</Link></h4>
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
          <h4 style={{
            margin: '0'
          }}><Link to='https://launchacademy.com/'>Launch Academy</Link></h4>
                <text>Software Developer Track</text>
                <p>
                •	Certificate of completion for Full Stack Software Developer <br/>
                </p>
          <h4 style={{
            margin: '0'
          }}><Link to='https://www.northeastern.edu/'>Northeastern University</Link></h4>
                <text>B.S. Counseling Psychology</text>
                <p>
                •	Minor: Latino/a American and Caribbean Studies<br/>
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
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
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
          </ul>
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
