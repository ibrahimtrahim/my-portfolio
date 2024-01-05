import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faFileAlt, faBriefcase} from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

const Hero = () => {

  return (
      <div class="w-full max-w-sm h-96flex justify-center max-w-sm bg-dark-primary rounded-lg shadow">
          <div class="flex flex-col justify-center items-center sm:py-40">
              <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/assets/images/pic-2.png" alt="brahim trahim"/>
              <h1 class="mb-1 text-xl text-white font-lekton font-bold">Brahim Trahim</h1>
                <span className="text-sm font-lekton text-blue-400">
                <Typewriter
                    options={{
                    loop: true,
                    autoStart: true,
                    strings: ["Frontend Developer", "Freelancer", "Coder"],
                  }}
                />
                </span>
              <div className="flex mt-4 md:mt-6">
                <NavLink icon={faUser}/>
                <NavLink icon={faFileAlt}/>
                <NavLink icon={faBriefcase}/>
              </div>
              <div class="flex mt-4 md:mt-6">
                  <a href="#" class="inline-flex items-center mx-2 px-4 py-2 text-sm font-lekton font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DOWNLOAD CV</a>
                  <a href="#" class="inline-flex items-center mx-2 px-4 py-2 text-sm font-lekton font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CONTACT ME</a>
              </div>
          </div>
      </div>
  )
}

const NavLink = ({ icon }) => {
  return (
    <a href="#" className="flex flex-col items-center px-2 mx-2 hover:text-blue-400">
      <FontAwesomeIcon icon={icon} className="text-white mb-2 hover:text-blue-400" />
    </a>
  );
};
export default Hero