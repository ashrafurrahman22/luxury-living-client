import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    if(data.password !==data.confirmPassword){
        alert("Password didn't match")
    }
  };


    return (
        <div style={{
            fontFamily:"Montserrat"
        }} className='flex justify-center items-center py-14'>
            <div>
            <div className="card card-body text-black border border-black rounded shadow-sm w-96">
                <h1 className='font-semibold text-lg'>Create an account</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
      <input className='border-b p-2 border-gray-400' placeholder='First Name' {...register("firstname")} />
      <input className='border-b p-2 border-gray-400' placeholder='Last Name' {...register("lastname")} />
      <input className='border-b p-2 border-gray-400' placeholder='Email' type="email" {...register("email")} required />
      <input className='border-b p-2 border-gray-400' placeholder='Password' type="password" {...register("password")} required />
      <input className='border-b p-2 border-gray-400' placeholder='Confirm Password' type="password" {...register("confirmPassword")} required />
      
      {errors.password && <span>This field is required</span>}
      
      <input className='btn bg-blue-900 w-full mx-auto border-none normal-case font-light' type="submit" value="Create an account" />
    </form>
            <h2 className='text-xs text-center pt-2'>Already have an account? <Link className='text-blue-700' to='/login'>Login</Link> </h2>
            </div>
            <div className="divider">or</div>

            <div className='border border-gray-400 rounded-full flex px-10 justify-center items-center'>
                <img className='w-12 p-2' src="https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" alt="" />
                <p className='text-center'>Continue with Facebook</p>
            </div>
            <div className='border border-gray-400 rounded-full mt-3 flex justify-center px-10 items-center'>
                <img className='w-12 p-2' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                <p>Continue with Google</p>
            </div>
            </div>
        </div>
    );
};

export default Signup;