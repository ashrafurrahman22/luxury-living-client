import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleTesti = ({testi}) => {

    const {img, name, title, description}=testi;

    return (
        <div className="card w-80 rounded card-body bg-base-100 shadow-lg">
      <div className="flex justify-start items-center gap-4">
      <figure><img className='w-14' src={img} alt="Shoes" /></figure>
      <div className="">
        <h2 className="text-lg font-semibold">{name}</h2>
        <h2 className="text-sm font-semibold">{title}</h2>
      </div>
      </div>
      <p className='text-left'>{description}</p>
      <div className='flex justify-start py-2 gap-2 items-center'>
        <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
        <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
      </div>
    </div>
    );
};

export default SingleTesti;