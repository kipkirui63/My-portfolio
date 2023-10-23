import { React } from 'react'
import {    
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,

} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AboutContent.css'

const AboutContent= () => {
    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
          
            <p>
            I'm a highly motivated individual ready to make a difference in the world of technology. 
             I have a strong grasp of HTML,CSS,JavaScript,react,Python,Flask,MySQL,Postgresql and interacting with API's and I am always looking for ways to continue to grow my skill set and stay up to date with the latest trends.
             Driven by a desire to create engaging user experiences,
             I'm dedicated to creating code and products that are reliable and bug-free
            </p>
            <p >
              I'm quiet confident, naturally curious, and perpetually working on
              improving my chops one design problem at a time.
            </p>
            <p>
              If I need to define myself in one sentence that would be a willing to learn 
              person,and tech-obsessed!!!
            </p>
          </div>

          <div className="stage-cube-cont">
          <div className="cubespinner large-icon">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact}  color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <div className="loader-container">
        <Loader type="pacman" />
      </div>
    </>
  )
}

export default AboutContent;