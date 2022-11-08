import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SingleServices from './SingleServices';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div>
            <div className='text-center'>
            <p className="text-xl">Services</p>
      <h1 className="text-3xl font-semibold">
      We're an agency tailored to all <br />
clients' needs that always delivers
      </h1>
            </div>

            <div className='grid grid-cols-3 my-14 px-12 gap-6'>
                {
                    services.map(service=> <SingleServices
                    key={service?._id}
                    service={service}
                    ></SingleServices> )
                }
            </div>

            <div className="text-center">
    <Link to='/' className="btn bg-blue-900 w-44 border-none normal-case font-light">Explore More</Link>
  </div>

        </div>
    );
};

export default Services;