import React from "react";

function HomePage(){
    return (
        <div className="flex flex-col justify-start h-screen">
            <div className="flex flex-col w-full items-center">
            <div className="text-spotify text-4xl text-white mt-8 ml-8"><p>DevConnect</p></div>
            </div>
            <div className=" flex w-65 h-65 border-1 border-black rounded-m bg-purple mt-10 ml-40 border-2 border-black justify-center items-center">
                <h5 className="text-lg w-[50%] text-white">
                Welcome to DevConnect, a platform for coders to come together, share ideas, join teams and collaborate on innovative projects. Whether you're a seasoned developer or just getting started in the coding world, our website is the perfect place to find like-minded individuals who are passionate about bringing creative ideas to life.
                </h5>
            </div>
            <div className=" flex w-65 h-65 border-1 border-black rounded-m bg-purple mt-10 ml-40 border-2 border-black justify-center items-center">
            <h5 className="text-lg w-[50%] text-white">
            Create a comprehensive profile showcasing your expertise, projects, and achievements. Your profile will feature detailed information about your existing and completed projects, including descriptions, progress status, and GitHub links. Other coders can browse your project portfolio, monitor your progress, and like your projects, thereby increasing their ratings.
            </h5>
            </div>
        </div>
    );
}

export default HomePage;