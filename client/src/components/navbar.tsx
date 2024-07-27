// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import pfpImage from '../assets/images/pfp.ico';
import logoImage from '../assets/images/logo-devconnect.ico';

const Navbar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-purple text-black rounded-tr-lg rounded-br-lg mb-20 ">
      {/* Sidebar */}
      <nav id="sidebar" className="flex flex-col  p-4">
        <div className="project-name mt-6 ml-2">
          <img src={logoImage} alt='logoimage'></img>
        </div>

        <ul className="list-unstyled components flex flex-col space-y-2 mb-20 font-spotify text-lg"> 
          <li className="active">
            <Link to="/" className="text-white hover:border block p-4 ml-6 mt-12 rounded">Home</Link>
          </li>
          <li>
            <Link to="/post" className="text-white hover:border block p-4 ml-6 mt-6 rounded">Post</Link>
          </li>
          <li>
            <Link to="/explore" className="text-white hover:border block p-4 ml-6 mt-6 rounded">Explore</Link>
          </li>
          <li>
            <Link to="/join-team" className="text-white hover:border block p-4 ml-6 mt-6 rounded">Join Team</Link>
          </li>
        </ul>

        <ul className="list-unstyled CTAs -mt-4">
          <li>
            <a  href='' className="flex items-center  space-x-2 text-white hover pt-10 ml-6  rounded font-spotify text-2xl">
              <img src={pfpImage} alt="ProfilePic" width="40" height="40" className="rounded-full" />
              <strong>Profile</strong>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
