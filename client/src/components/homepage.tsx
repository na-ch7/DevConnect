import React from "react";

function HomePage(){
    return (
        <div className="flex flex-col justify-start h-screen">
            <div className="flex flex-col w-full items-center">
            <div className="text-spotify text-4xl text-black mt-8 ml-8"><p>DevConnect</p></div>
            </div>
            <div className=" flex w-65 h-65 border-1 border-black rounded-m bg-purple mt-10 ml-40 border-2 border-black justify-center items-center">
                <h5 className="text-lg w-[50%] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vero laudantium tempore tenetur necessitatibus rerum voluptatum facere perspiciatis? Perferendis reprehenderit fugit quibusdam sunt corrupti voluptatem velit sit rerum aliquam iure.</h5>
            </div>
            <div className=" flex w-65 h-65 border-1 border-black rounded-m bg-purple mt-10 ml-40 border-2 border-black justify-center items-center">
            <h5 className="text-lg w-[50%] ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates vero laudantium tempore tenetur necessitatibus rerum voluptatum facere perspiciatis? Perferendis reprehenderit fugit quibusdam sunt corrupti voluptatem velit sit rerum aliquam iure.</h5>
            </div>
        </div>
    );
}

export default HomePage;