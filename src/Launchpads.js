import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Details from './Details';



const Launchpads = () => {
    const [Launches, setLaunches] = useState([]);

    useEffect(() => {
        loadLaunches();
    }, []);

    const loadLaunches = async () => {
        const result = await axios.get("https://api.spacexdata.com/v4/landpads");
        setLaunches(result.data);
    
    }
  

  


    return (



        Launches.map((Launch, index) => (
            <>
                <ul className="list">
                    <li><b>Name:</b>{Launch.name}</li>
                    <li><b>Details:</b>{Launch.details}</li>
                    <li><b>Status:</b>{Launch.status}</li>
                </ul>


                <div className="list_group">


                <h3 className="outline-dark mr-2" ><b><u>Top 3 Launches</u></b>
                
                 </h3>
                    <ul>
                        <li>
                    <Link to={`/Details/${Launch.launches.sort()[0]}`}>
                    {Launch.launches.sort()[0] ? `${Launch.launches.sort()[0]}` : "Not Launch Available"}
                    </Link>
                    </li>
                    <li>
                    <Link to={`/Details/${Launch.launches.sort()[1]}`}>
                   
                   {Launch.launches.sort()[1] ? `${Launch.launches.sort()[1]}` : "Not Launch Available"}
                   </Link>
                   </li>
                   <li>
                   <Link to={`/Details/${Launch.launches.sort()[2]}`}>
                   
                   {Launch.launches.sort()[2] ? `${Launch.launches.sort()[2]}`  : "Not Launch Available"}
                   </Link>
                   </li>
                   </ul>
                </div>
             

            </>



        ))


    )


};

export default Launchpads;