import React from 'react';

const SingleServices = ({service}) => {

    const {img, name,price, title} = service;

    return (
      <div className="card w-96 bg-base-100 shadow-lg">
      <figure><img className='w-24' src={img} alt="Shoes" /></figure>
      <div className="card-body text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <h2 className="text-lg font-semibold">${price}</h2>
        <p className='text-sm'>{title}</p>
      </div>
    </div>
    );
};

export default SingleServices;