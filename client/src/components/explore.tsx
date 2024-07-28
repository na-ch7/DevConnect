import React , {useState} from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const Explore= () => {

    const [activeSearch, setActiveSearch] = useState('');
    const [results, setResults] = useState<string[]>([]);

    const words = [
        "Project Alpha", "Project Beta", "Project Gamma",
        "Project Delta", "Project Epsilon", "Project Zeta",
        "Project Eta", "Project Theta", "Project Iota"
    ];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setActiveSearch(query);

        if (query === '') {
            setResults([]);
            return;
        }

        const filteredResults = words.filter(word => word.toLowerCase().includes(query.toLowerCase())).slice(0, 8);
        setResults(filteredResults);
    };

    const handleresclick = (res: string) =>{
        setActiveSearch(res);
        setResults([]);
    }

    const dummyData = [
        { title: 'Project Alpha', name: 'Alice', members: 5 , description: "Hello this is 1st project"},
        { title: 'Project Beta', name: 'Bob', members: 3 , description: "Hello this is 2nd project"},
        { title: 'Project Gamma', name: 'Charlie', members: 8 , description: "Hello this is 3rd project"},
        { title: 'Project Delta', name: 'David', members: 4 , description: "Hello this is 4th project"},
        { title: 'Project Epsilon', name: 'Eve', members: 2 , description: "Hello this is 5th project"},
        { title: 'Project Zeta', name: 'Frank', members: 6 , description: "Hello this is 6th project"},   
    ];

    return (
    <div>
        <div className='flex justify-end'>
            <form className='w-[440px] relative mr-10'>  
                <div className="relative">
                    <input type='search' placeholder='Type here...' 
                    className='w-full p-3 rounded-xl bg-slate-800 text-white mt-10'
                    onChange={handleSearch}
                    value={activeSearch}
                    />
                    <button className='absolute right-1 top-1/2 -translate-y-1/2> p-4 bg-gray rounded-full'>    
                        <AiOutlineSearch/>
                    </button>
                </div>
                {results.length > 0 && (
                        <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl flex flex-col gap-2 hover:cursor">
                            {results.map((result, index) => (
                                <div key={index} className="bg-slate-700 p-4 rounded-lg" onClick={()=> handleresclick(result)}>{result}</div>
                            ))}
                        </div>
                )}
                {/* <div className="mt-4 p-4 bg-slate-800 text-white w-full rounded-xl flex flex-col gap-2"> */}
                    {/* <div className="bg-slate-700 p-4 rounded-lg"></div> */}
                    {/* <div className="bg-slate-700 p-4 rounded-lg"></div> */}
                {/* </div> */}

            </form>
        </div>
        <div className='flex ml-20'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10"> 
                {dummyData.map((data, index) => (
                    <div key={index} className="bg-slate-700 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-2 text-white">{data.title}</h2>
                        <p className="text-white">Name: {data.name}</p>
                        <p className="text-white">Team Members: {data.members}</p>
                        <p className="text-white">Description: {data.description}</p>
                    </div>  
                ))}
            </div>

        </div>
    </div>
    );
};

export default Explore;
