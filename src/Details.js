import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Details = () => {
    const [Launchdetail, setLaunchedetail] = useState([]);

 
    useEffect(() => {
        loadLaunchedetail();
    }, []);

    const loadLaunchedetail = async () => {
        const result = await axios.get("https://api.spacexdata.com/v4/launches");
        setLaunchedetail(result.data);
    }
     const id={Launchdetail};

    return (


        Launchdetail.map((Ldetail, index) => (
            
            <>
              <Link className="btn btn-warning btn-outline-dark mr-2" to="/">
                Back
        </Link>
           
                <ul className="list_detail">
                    <li><b>id:</b>{Ldetail.id}</li>
                    <li><b>Name:</b>{Ldetail.name}</li>
                    <li><b>Details:</b>{Ldetail.details}</li>
                   <li><b>Date:</b>{Ldetail.date_utc}</li>
                   <li><b>Reused:</b>{Ldetail.cores.reused}"false"</li>
                </ul>



            </>
        ))
    )
};

export default Details;