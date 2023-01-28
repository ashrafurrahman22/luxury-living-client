import React from 'react';

const SingleServices = ({service}) => {

    const {img, name,price, title} = service;

    return (
      <div className="card bg-base-100 shadow-xl border">
      <figure><img className='w-24 p-2' src={img} alt="Shoes" /></figure>
      <div className="card-body text-center">
        <h2 className="text-lg font-semibold">{name}</h2>
        <h2 className="text-lg font-semibold">${price}</h2>
        <p className='text-sm'>{title}</p>
      </div>
    </div>
    );
};

export default SingleServices;