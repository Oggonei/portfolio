import React from 'react'
import './Profile.scss'
import Box from '../../components/box/Box'
import InlineInformation from '../../components/inlineInformation/InlineInformation'
import profile from '../../assets/images/profile.jpg'
import BlockInformation from '../../components/blockInformation/BlockInformation'
import List from '../../components/list/List'
import { FaLinkedin, FaWhatsappSquare, FaGithubSquare, FaInstagramSquare} from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { SiUdemy, SiPlatzi } from "react-icons/si";
import { DiReact, DiJavascript1, DiBootstrap, DiSass, DiCss3, DiHtml5  } from "react-icons/di";
// import underConstruction from '../../assets/svg/underConstruction.svg';
import trailRunning from '../../assets/images/leisure/trailRunning.jpg';
import cycling from '../../assets/images/leisure/cycling.jpg';

import { Link } from 'react-router-dom'


const ProfileScreen = () => {
  return (

    <>

    <div className='profile'>

      <div className='box-container_1'>
        <Box title='Personal Information'>
          <div className="profile-content">
            <img className='profile-content-image' src={profile} alt="Profile"/>
            <div className="profile-content-text">
              <p className='profile-content-name'>Cristhian David Santos Oggonei</p>
              <p className='profile-content-profession'>Mechatronic Engineer</p>
              <p className='profile-content-location'>Bogotá, Colombia</p>
              <div className='separator'></div>
              <p className='profile-content-abstract'>
                Mechatronic engineer, with more than two years of experience in IT companies in web development and technical support. I am interested in Full Stack areas 
                to provide solutions in the field of web development, I consider myself passionate about technology since I am always looking for learning spaces to apply 
                my knowledge in different projects
              </p>
            </div>
          </div>
        </Box>

        <Box title='Contact'>
          <div className="inlineInformation">
            <InlineInformation logo={<ImMail style={{fontSize: '25px'}}/>} information='csantosoggonei@gmail.com' url='mailto:csantosoggonei@gmail.com'/>
            <InlineInformation logo={<FaWhatsappSquare style={{fontSize: '27px'}}/>} information='+57 3214642753' url='https://wa.me/573214642753'/>
            <InlineInformation logo={<FaLinkedin style={{fontSize: '27px'}}/>} information='@CristhianSantosOggonei' url='https://www.linkedin.com/in/cristhiansantosoggonei/'/>
            <InlineInformation logo={<FaGithubSquare style={{fontSize: '27px'}}/>} information='@Oggonei' url='https://github.com/Oggonei'/>
            <InlineInformation logo={<FaInstagramSquare style={{fontSize: '27px'}}/>} information='@oggonei' url='https://www.instagram.com/oggonei'/>
          </div>
        </Box>

        <Box title='Skills'>
            <div className="skills-container">
              <InlineInformation logo={<DiReact style={{fontSize: '25px'}}/>} information='React'/>
              <InlineInformation logo={<DiJavascript1 style={{fontSize: '25px'}}/>} information='Javascript'/>
              <InlineInformation logo={<DiBootstrap style={{fontSize: '25px'}}/>} information='Bootstrap'/>
              <InlineInformation logo={<DiSass style={{fontSize: '25px'}}/>} information='SASS'/>
              <InlineInformation logo={<DiCss3 style={{fontSize: '25px'}}/>} information='CSS'/>
              <InlineInformation logo={<DiHtml5 style={{fontSize: '25px'}}/>} information='HTML'/>
            </div>
        </Box>
      </div>

      <div className='box-container_2'>

        <Box title='Experience'>
          <div className='experience-Container'>
            <BlockInformation 
              position='Product Specialist - Valuit Solutions' 
              date='may/2023 to currently' 
              time='10 month' 
            />
            <List functions={[
              'development(full stack) to solve customer needs',
              'Database management',
              'Development with Manage Engine tools',
              'Technical support'
            ]}/>
            <BlockInformation 
              position='Support Engineer - NI' 
              date='Oct/2019 to April/2021' 
              time='1year 6month' 
            />
            <List functions={[
              "Development with the company's own software and hardware.",
              'Support to customer requests.',
              'Customer training with different courses offered by the company'
            ]}/>

            <BlockInformation 
              position='Support Engineer - ADDI' 
              date='Nov/2021 to May/2022' 
              time='6 month' 
            />
            <List functions={[
              'Development and upgrades to web and mobile platforms.',
              'Technical support for web and mobile platforms.',
              'Fix bugs from web and mobile platforms.',
              'Database management.'
            ]}/>
            <BlockInformation 
              position='Support Engineer - NI' 
              date='Oct/2019 to April/2021' 
              time='1year 6month' 
            />
            <List functions={[
              "Development with the company's own software and hardware.",
              'Support to customer requests.',
              'Customer training with different courses offered by the company'
            ]}/>
          </div>
        </Box>

        <Box title='Professional Education'>
          <div className='ProfessionalEducation-Container'>
            <BlockInformation 
              position='Full Stack developer ( Front-End + Back-End )' 
              date='Jun/2022 to Dec/2022'
              time='2022'
            />
            <List functions={[
              'Cataluña University.',
            ]}/>
            <BlockInformation 
              position='Mechatronic Engineer' 
              date='Jun/2016 to Jun/2021'
              time='2021'
            />
            <List functions={[
              'ECCI University.',
            ]}/>
            <BlockInformation 
              position='Automation and industrial robotics technology' 
              date='Jun/2016 to Jun/2019'
              time='2019'
            />
            <List functions={[
              'ECCI University.',
            ]}/>
          </div>
        </Box>

        <Box title='On-line Education (Web Development)'>
          <div className="onlineEducation-container">
            <div className="onlineEducation-container-udemy">
              <span className='onlineEducation-container-udemy-logo'><SiUdemy/></span>
              <p className='onlineEducation-container-udemy-name'>Udemy (1 certificate)</p>
            </div>
            <div className="onlineEducation-container-platzy">
              <span className='onlineEducation-container-platzy-logo'><SiPlatzi/></span>
              <p className='onlineEducation-container-platzy-name'>Platzy (28 certificates)</p>
            </div>
            <div className="onlineEducation-container-button">
              <Link to={'/certificates'}>
                <button>View certificates</button>
              </Link>
            </div>
          </div>
        </Box>
      </div>

      <div className="box-container_3">
        <Box title='Projects'>
          <div className="projects-container">
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Task Machine</span>
                <p>Made with ( React - SASS - JavaScript )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://oggonei.github.io/project-task-machine/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Credit Simulator</span>
                <p>Made with ( React - Tailwind - JavaScript )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://creditsimulator.netlify.app/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>CRM Administrator</span>
                <p>Made with ( IndexedDB - JavaScript - Tailwind )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://crm-administrator.netlify.app/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Veterinary Appointment Manager</span>
                <p>Made with ( Classes - JavaScript - Bootstrap )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://administradorcitasvet.netlify.app/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Cryptocurrency Quote</span>
                <p>Made with ( JavaScript )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://global-cryptocurrency-quote.netlify.app/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Image Finder</span>
                <p>Made with ( JavaScript )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://image-finder-px.netlify.app/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Weather API</span>
                <p>Made with ( Fetch - JavaScript - Tailwind )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://weather-appi-js.netlify.app/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Recipe Finder</span>
                <p>Made with ( Fetch - JavaScript - Bootstrap )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://recipefinder-app2.netlify.app/index.html' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Shopping Cart</span>
                <p>Made with ( JavaScript - CSS - HTML )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://carritodecompras-oggonei.netlify.app/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Mail Validator</span>
                <p>Made with ( JavaScript - Tailwind - HTML )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://mailvalidator.netlify.app/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Quote Vehicle Insurance</span>
                <p>Made with ( Prototypes - JavaScript - Tailwind )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://cotizadorsegurorvehiculos.netlify.app' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <div className="projects-container_projects">
              <div className="projects-container_projects-information">
                <span>Weekly Budget</span>
                <p>Made with ( Classes - JavaScript - Bootstrap )</p>
              </div>
              <div className="projects-container_projects-button">
                <a href='https://presupuestosemana.netlify.app/' target='_blank' rel='noreferrer'>
                  <button>View project</button>
                </a>
              </div>
            </div>
            <label>soon more projects...</label>
            {/* <img src={underConstruction} alt="" /> */}
          </div>
        </Box>

        <Box title='Leisure'>
          <div className="leisure-container">
            <div className="leisure-container-images">
              <div className="leisure-container-images-trail">
                <img src={trailRunning} alt="" />
              </div>
              <div className="leisure-container-images-bike">
              <img src={cycling} alt="" />
              </div>
            </div>
            <div className="leisure-container-button">
              <Link to={'/leisure'}>
                <button>View Leisure</button>
              </Link>
            </div>
          </div>
        </Box>
      </div>
    </div>

      <p className='footer'>
        This webPage was created using React and SASS to see projects with more technologies such as Javascript, Css, bootstrap and more, go to the "projects" section
      </p>
      

    </>
  )
}

export default ProfileScreen