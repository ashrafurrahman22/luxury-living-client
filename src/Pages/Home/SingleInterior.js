import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleInterior = ({design}) => {
    
    const {img, name, location} = design;

    return (
        <div className='w-96 card card-body text-center'>
          <img className='w-80 h-2/3' src={img} alt="" />
          <div className='py-2'>
          <h1 className='text-md font-bold'>{name}</h1>
          <p className='text-sm py-1'> <FontAwesomeIcon icon={faLocationDot}/> {location}</p>
          </div>
        </div>
    );
};

export default SingleInterior;