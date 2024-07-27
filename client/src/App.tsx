import './App.css';
import React from 'react';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import HomePage from './components/homepage';
import Navbar from './components/navbar'
import './assets/fonts/font.css';

function App() {
  return (
    <Router>
      <div className='app-container bg-periwinkle'>
        <Navbar/>
        <div>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
