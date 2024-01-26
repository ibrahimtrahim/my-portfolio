import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faBriefcase, faBlog, faEnvelope, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
<<<<<<< HEAD
    <header className="flex bg-dark-primary text-white p-4 rounded items-center mr-2 z-50">
      <nav className="flex flex-row justify-center items-center font-lekton font-medium">
        <ul>
        <NavLink icon={faSun}/>
        <NavLink icon={faHome} label="Home" to="/home" />
        <NavLink icon={faUser} label="About" to="/about" />
        <NavLink icon={faBriefcase} label="Projects" to="/projects" />
        <NavLink icon={faEnvelope} label="Contact" to="/contact" />
=======
    <header className="flex bg-dark-primary text-white p-4 rounded items-center sm:mr-2 sm:z-50">
      <nav className="flex sm:flex-col flex-row justify-center items-center font-lekton font-medium">
        <ul>
        <NavLink icon={faSun}/>
        <NavLink icon={faHome} label="Home" to="#" />
        <NavLink icon={faUser} label="About" to="#" />
        <NavLink icon={faBriefcase} label="Projects" to="#" />
        <NavLink icon={faEnvelope} label="Contact" to="#" />
        <NavLink icon={faBlog} label="Articles" to="#" />
>>>>>>> cab5e66 (home)
        </ul>
      </nav>
    </header>
  );
};

const NavLink = ({ icon, label, to }) => {
  return (
    <li className='hover:text-blue-400'>
<<<<<<< HEAD
      <a href={to} className="flex flex-col items-center py-2 my-6">
=======
      <a href={to} className="flex flex-col items-center py-2 my-2">
>>>>>>> cab5e66 (home)
        <FontAwesomeIcon icon={icon} className="text-white mb-2" />
        <span className='text-xs uppercase'>{label}</span>
      </a>
    </li>
  );
};

export default Header;