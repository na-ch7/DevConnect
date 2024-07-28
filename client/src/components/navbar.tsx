// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import pfpImage from '../assets/images/pfp.ico';
import logoImage from '../assets/images/logo-devconnect.ico';

const Navbar: React.FC = () => {
  return (
    <div className=" flex flex-col w-64 h-screen bg-purple  ">
      {/* Sidebar */}
      <nav id="sidebar" className="flex flex-col  p-4 h-full">
        <div className="project-name mt-6 ml-2">
          <img src={logoImage} alt='logoimage'></img>
        </div>

        <ul className="list-unstyled components space-y-2 mb-20 font-monopoly text-lg"> 
          <li className="active">
            <Link to="/" className="text-white hover:border block p-4 ml-6 mt-12 rounded">Home</Link>
          </li>
          <li>
            <Link to="/post-project" className="text-white hover:border block p-4 ml-6 mt-6 rounded">Post</Link>
          </li>
          <li>
            <Link to="/explore" className="text-white hover:border block p-4 ml-6 mt-6 rounded">Explore</Link>
          </li>
          <li>
            <Link to="/join-team" className="text-white hover:border block p-4 ml-6 mt-6 rounded">Join Team</Link>
          </li>
        </ul>

        <div className='mt-auto mb-4'>
            <Link  to='/login' className="flex items-center  space-x-2 text-white hover pt-10 ml-6  rounded font-monopoly text-lg">
              <img src={pfpImage} alt="ProfilePic" width="30" height="30" className="rounded-full" />
              <span/>
              <span/>
              <strong>Login</strong>
            </Link>
            </div>
      </nav>
    </div>
  );
};

export default Navbar;
