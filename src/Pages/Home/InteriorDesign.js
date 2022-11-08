import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleInterior from './SingleInterior';

const InteriorDesign = () => {

    const  [designs, setDesigns] = useState([]);

    useEffect(()=>{
        fetch('interior.json')
        .then(res=>res.json())
        .then(data=>setDesigns(data))
    },[])

    return (
        <div className='text-center mt-24'>
            <div className='py-5'>
            <p className="text-xl">Projects</p>
      <h1 className="text-3xl font-semibold">
      Discover the latest Interior Design <br />
available today
      </h1>
            </div>
        
        <div className='grid grid-cols-3 px-14 gap-5'>
            {
                designs.map(design => <SingleInterior
                key={design?._id}
                design={design}
                ></SingleInterior> )
            }
        </div>
        </div>
    );
};

export default InteriorDesign;