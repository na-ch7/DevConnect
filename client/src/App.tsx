import './App.css';
import React from 'react';
// import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import HomePage from './components/homepage';
import Navbar from './components/navbar'
import PostProject from './components/postproject';
import LoginPage from './components/login';
import SignUp from './components/signup';
import Explore from './components/explore';
import './assets/fonts/font.css';

function App() {
  return (
    <div className='bg-shaft'>
    <Router>
      <div className='app-container flex'>
        <Navbar/>
        <div className="flex-1 ">
            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/login' element={<LoginPage/>}></Route>
              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/post-project' element={<PostProject/>}></Route>
              <Route path='/explore' element={<Explore/>}></Route>
            </Routes>
        </div>
      </div>
      </Router>
    </div>
  );
  
}

export default App;
