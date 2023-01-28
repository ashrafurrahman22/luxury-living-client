import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithFacebook,
    // useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    // useUpdateProfile,
  } from "react-firebase-hooks/auth";
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const Signup = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [createUserWithEmailAndPassword, user2, loading2, error2] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let signInError;

  if (user || user2 || user3) {
    navigate(from, { replace: true });
    console.log(user);
  }

  if (loading || loading2 || loading3) {
    return <Loading></Loading>;
  }

  if (error || error2 || error3 ) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || error2?.message || error3.message}
        </small>
      </p>
    );
  }


  const onSubmit = async (data) => {
    if(data.password !== data.confirmPassword){
            return   toast.warning("Password didn't match")
    }
    await createUserWithEmailAndPassword(data.email, data.password)
    .then(
      toast.success("Successfully Created an Account")
    )
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
{
      signInError
}      
      <input className='btn bg-blue-900 w-full mx-auto border-none normal-case font-light' type="submit" value="Create an account" />
    </form>
            <h2 className='text-xs font-semibold text-center pt-2'>Already have an account? <Link className='text-blue-700' to='/login'>Login</Link> </h2>
            </div>
            <div className="divider">or</div>

            <button onClick={()=> signInWithFacebook() } className='border border-gray-400 rounded-full flex w-full justify-center items-center'>
                <img className='w-12 p-2' src="https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" alt="" />
                <p className='text-center'>Continue with Facebook</p>
            </button>

            <button onClick={() => signInWithGoogle()} className='border border-gray-400 rounded-full mt-3 flex justify-center w-full items-center'>
                <img className='w-12 p-2' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                <p>Continue with Google</p>
            </button>
            </div>
        </div>
    );
};

export default Signup;