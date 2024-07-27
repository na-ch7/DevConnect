import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className="flex justify-end w-full h-screen">
  <div className="flex flex-col bg-purple p-10 rounded shadow-2xl max-w-lg mx-auto mr-0">
    <form className="mt-10 p-4 w-full">
      <div className="flex items-start mb-10 w-full">
        <div className="w-full text-center">
          <h1 className="text-lg font-monopoly font-bold">Sign Up</h1>
          <p className='font-monopoly'>Join our community!</p>
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
      />
      <label className="block text-black text-sm font-monopoly mb-0" htmlFor="username">
        User Name
      </label>
      <input
        type="text"
        className="form-input mb-4 block w-full border-2 border-blue-500 rounded focus:outline-none focus:border-blue-700 rounded-lg h-8"  
        id="username"
        placeholder="Enter your username"
        style={{ width: "250px" }}
      />
      <label className="block text-black text-sm font-monopoly mb-0" htmlFor="github">
        Github Id
      </label>
      <input
        type="url"
        className="form-input mb-4 block w-full border-2 border-blue-500 rounded focus:outline-none focus:border-blue-700 rounded-lg h-8"
        id="github"
        placeholder="Enter your Github ID"
        style={{ width: "250px" }}
      />
      <label className="block text-black text-sm font-monopoly mb-0" htmlFor="password">
        Password
      </label>
      <input
        type="password"
        className="form-input mb-4 block w-full border-2 border-blue-500 rounded focus:outline-none focus:border-blue-700 rounded-lg h-8"
        id="password"
        placeholder="Enter your password"
        style={{ width: "250px" }}
      />
      <label className="block text-black text-sm font-monopoly mb-0" htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input
        type="password"
        className="form-input mb-4 block w-full border-2 border-blue-500 rounded focus:outline-none focus:border-blue-700 rounded-lg h-8"
        id="confirmPassword"
        placeholder="Confirm your password"
        style={{ width: "250px" }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-monopoly shadow-inner py-2  rounded mt-6 w-full"
      >
        Sign Up
      </button>
    </form>
  </div>
</div>

  );
};

export default SignUp;
