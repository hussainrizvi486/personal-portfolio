import './styles/apps.css'
import './styles/main.css'
import './styles/header.css'
import { useEffect } from 'react'
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi'
import { BiLogoUpwork } from 'react-icons/bi'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { SlideRightInitial, SlideRightView, FadeInitial, FadeInView } from './animations'
// import img from './cover.png'
import { PgCard } from './components/PgCard/PgCard'
import { experienceData, projectsData } from "./webData"


function App() {
  useEffect(() => {
    console.log("loaded")

  }, [])


  return (
    <div id='app-container'>

      <header className="app-header">
        <div className='app-header__content'>
          <motion.div
            initial={{ ...FadeInitial }}
            whileInView={{ ...FadeInView }}
            transition={{
              duration: .300,
              ease: "easeInOut"
            }}
          >
            <h1>Hussain rizvi</h1>
          </motion.div>


          <motion.div
            initial={{ ...FadeInitial }}
            whileInView={{ ...FadeInView }}
            transition={{
              duration: .300,
              ease: "easeInOut",
              delay: .2
            }}>
            <h2>
              <Typewriter
                words={['Backend Developer', 'Frontend Developer',]}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500} />
            </h2>
          </motion.div>



          <motion.div
            initial={{ ...FadeInitial }}
            whileInView={{ ...FadeInView }}
            transition={{
              duration: .300,
              ease: "easeInOut",
              delay: .35
            }}>

            <p>I build accessible, inclusive products and digital experiences for the web.</p>
          </motion.div>


          <div className="app-header__nav-container">

            <nav>
              <motion.div
                initial={{
                  translateY: "-50%",
                  opacity: 0,
                }}
                whileInView={{
                  translateY: "0%",
                  opacity: 1,
                }}

                transition={{
                  duration: .300,
                  delay: .2
                }}

              >
                <a className="nav-element " href="#about">
                  <span className="nav-line-effect"></span>
                  <span className="nav-text-content">ABOUT</span>
                </a>
              </motion.div>

              <motion.div
                initial={{
                  translateY: "-50%",
                  opacity: 0,
                }}
                whileInView={{
                  translateY: "0%",
                  opacity: 1,
                }}

                transition={{
                  duration: .300,
                  delay: .3

                }}

              >
                <a className="nav-element " href="#experience">
                  <span className="nav-line-effect"></span>
                  <span className="nav-text-content">EXPERIENCE</span>
                </a>
              </motion.div>

              <motion.div
                initial={{
                  translateY: "-50%",
                  opacity: 0,
                }}
                whileInView={{
                  translateY: "0%",
                  opacity: 1,
                }}

                transition={{
                  duration: .300,
                  delay: .4
                }}

              >
                <a className="nav-element " href="#project">
                  <span className="nav-line-effect"></span>
                  <span className="nav-text-content">PROJECT</span>
                </a>
              </motion.div>
            </nav>

          </div>
        </div>

        <div>

          <nav className='app-header__social-navbar'>

            <motion.div
              initial={{ ...SlideRightInitial }}
              whileInView={{ ...SlideRightView }}
              transition={{
                duration: .300,
              }}
            >

              <a href="/" className='social-navbar__item'><FiGithub /></a>
            </motion.div>

            <motion.div
              transition={{
                delay: .1,
                duration: .300,
              }}
              initial={{ ...SlideRightInitial }}
              whileInView={{ ...SlideRightView }}
            >
              <a href="/" className='social-navbar__item'><FiFacebook /></a>
            </motion.div>

            <motion.div
              initial={{ ...SlideRightInitial }}
              whileInView={{ ...SlideRightView }}
              transition={{
                delay: .2,
                duration: .300,
              }}

            >
              <a href="/" className='social-navbar__item'><BiLogoUpwork /></a>
            </motion.div>

            <motion.div
              initial={{ ...SlideRightInitial }}
              whileInView={{ ...SlideRightView }}
              transition={{
                delay: .3,
                duration: .300,
              }}
            >
              <a href="/" className='social-navbar__item'><FiLinkedin /></a>
            </motion.div>




          </nav>

        </div>
      </header >

      {/* TEMP */}
      < br />
      <br />
      <br />
      <br />
      {/* TEMP */}

      <div className="app-main">
        <AboutSection />
        <ExpSection />
        <ProjectSection />
      </div>
    </div >
  );
}

export default App;



export const AboutSection = () => {
  return (
    <div className='app-section' id='about'>
      <div className='app-section__heading'>
        <h2>ABOUT</h2>
      </div>

      <div className='app-section__content'>
        <p>


          Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
          <br />
          <br />
          My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
          <br />
          <br />
          When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for
        </p>

      </div>
    </div>
  )
}

export const ExpSection = () => {
  return (
    <div className='app-section' id='experience'>
      <div className='app-section__heading'>
        <h2>EXPERIENCE</h2>
      </div>

      <div className='app-section__content'>
        <div className="exp-cards-list">
          {experienceData.map((value, index) =>
            <PgCard
              key={index}
              heading={value.company}
              label={value.role}
              description={value.description}
              langCards={value.larrArr}
              dataLable={value.timePeriod}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export const ProjectSection = () => {

  return (
    <div className='app-section'>
      <div className='app-section__heading' id='project'>
        <h2>PROJECTS</h2>
      </div>

      <div className='app-section__content'>
        <div className="exp-cards-list">
          {projectsData.map((value, index) =>

            <PgCard coverImg={value.img} langCards={value.larrArr}
              cardType='project'
              heading={value.name}
              description={value.description}

            />
          )}

        </div>
      </div>
    </div>
  )
}


