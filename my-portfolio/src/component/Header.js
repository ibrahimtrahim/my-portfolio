import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFileAlt, faBriefcase, faBlog, faEnvelope, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="flex bg-dark-primary text-white p-4 rounded items-center sm:mr-2 sm:z-50">
      <nav className="flex sm:flex-col flex-row justify-center items-center font-lekton font-medium">
        <ul>
        <NavLink icon={faSun}/>
        <NavLink icon={faHome} label="Home" to="#" />
        <NavLink icon={faUser} label="About" to="#" />
        <NavLink icon={faFileAlt} label="Resume" to="#" />
        <NavLink icon={faBriefcase} label="Works" to="#" />
        <NavLink icon={faEnvelope} label="Contact" to="#" />
        <NavLink icon={faBlog} label="Blog" to="#" />
        </ul>
      </nav>
    </header>
  );
};

const NavLink = ({ icon, label, to }) => {
  return (
    <li className='hover:text-blue-400'>
      <a href={to} className="flex flex-col items-center py-2 my-2">
        <FontAwesomeIcon icon={icon} className="text-white mb-2" />
        <span className='text-xs uppercase'>{label}</span>
      </a>
    </li>
  );
};

export default Header;