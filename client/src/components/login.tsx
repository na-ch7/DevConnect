import React from "react";
import { Link } from 'react-router-dom'; 

function LoginPage(){

    return (
    <div className="flex justify-end w-full h-screen ">
      <div className="flex flex-col bg-purple p-10 rounded shadow-2xl max-w-lg mx-auto mr-0">
        <form className="mt-10 p-2 w-full">
          <div className="flex items-start mb-10 w-[100%]">
            <div className="w-full text-left mr-4">  
              <h1 className="text-lg font-monopoly font-bold">Welcome Back,</h1>
              <p className="font-monopoly">Welcome Back! Please Enter your details</p>
            </div>
          </div>
            <label className="block text-black text-sm font-monopoly mb-0" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-input mb-4 block w-full border-2 border-blue-500 rounded focus:outline-none focus:border-blue-700 rounded-lg h-8"
              id="email"
              placeholder="Enter your email"
              style={{width:"250px"}}
            />
            <label className="block text-black text-sm font-monopoly mb-0" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-input mb-4 block w-full border-2 border-blue-500 rounded focus:outline-none focus:border-blue-700 rounded-lg h-8"
              id="password"
              placeholder="Enter your password" 
              style={{width:"250px"}}
            />
          <button className="bg-blue-500 text-white font-monopoly shadow-inner py-2 px-4 rounded mt-6 w-full" 
          type="submit"
          style={{width:"250px"}}
          >
            Login
          </button>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="flex-shrink mx-4 text-black-500">Or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="flex items-center my-4">
          <Link
            to="/signup"
            className="w-full bg-blue-500 text-black font-monopoly py-2 px-4 rounded hover:bg-gray-700 text-center block "
            style={{width:"250px"}}
          >
            Sign Up
          </Link> 
          </div>
        </form>
      </div>
    </div>
    );
};

export default LoginPage;