import React, { useEffect, useState } from 'react';
import SingleTesti from './SingleTesti';

const Testimonials = () => {
    
    const [testies, setTesties] = useState([])
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setTesties(data))
    },[])

    return (
        <div className='text-center mt-20 p-20 bg-base-300'>
            <h1 className='text-3xl font-bold'>Testimonials</h1>
            <div className='grid grid-cols-3 gap-6 px-10 my-8'>
                {
                    testies.map(testi=><SingleTesti
                    key={testi?._id}
                    testi={testi}
                    ></SingleTesti>)
                }
            </div>
        </div>
    );
};

export default Testimonials;