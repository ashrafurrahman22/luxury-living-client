import { async } from '@firebase/util';
import React from 'react';
import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { set, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';

const Login = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
    }

    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(user || user2 ||user3 ){
        navigate(from, { replace: true });
        console.log(user);
      }

    if (loading || loading2 || loading3 ) {
        return <Loading></Loading>
    }

    if(error || error2 || error3 ){
        signInError= <p className='text-red-500'><small>{error?.message || error2?.message || error3.message }</small></p>
    }

    const onSubmit = async (data) => {
        console.log(data)
        await signInWithEmailAndPassword(data.email, data.password)
    }

    return (
      <div style={{
        fontFamily:"Montserrat"
    }} className='flex justify-center items-center py-14'>
        <div>
        <div className="card card-body text-black border border-black rounded shadow-sm w-96">
            <h1 className='font-semibold text-lg'>Login</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
  <input className='border-b p-2 border-gray-400' placeholder='Email' type="email" {...register("email")} />
  <input className='border-b p-2 border-gray-400' placeholder='Password' type='password' {...register("password")} />
  
  {errors.password && <span>This field is required</span>}
  {signInError}
  <input className='btn bg-blue-900 w-full mx-auto border-none normal-case font-light' type="submit" value="Login" />
</form>
        <h2 className='text-xs font-semibold text-center pt-2'>Don't have an account? <Link className='text-blue-700' to='/signup'>Signup</Link> </h2>
        </div>
        <div className="divider">or</div>

            <div>

            <button onClick={() => signInWithGoogle()} className='border border-gray-400 rounded-full flex justify-center w-full items-center py-2'>
                <FcGoogle className='text-3xl'/>
                <p className='px-2'>Continue with Google</p>
            </button>

        <button onClick={()=> signInWithFacebook() } className='border border-gray-400 rounded-full flex    w-full justify-center items-center py-2 mt-3'>
                <FaFacebook className='text-3xl' />
                <p className='text-center px-2'>Continue with Facebook</p>
            </button>

            </div>

           
        </div>
    </div>
    );
};

export default Login;