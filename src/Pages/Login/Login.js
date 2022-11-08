import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

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

    if(user || user1){
        navigate(from, { replace: true });
        console.log(user);
      }

    if (loading || loading1 ) {
        return <Loading></Loading>
    }

    if(error || error1){
        signInError= <p className='text-red-500'><small>{error?.message || error1?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className="min-h-screen">
        <div className="flex justify-center items-center">
          <div id='login-mainDiv'
            
            className="flex rounded-xl bg-base-200 flex-col justify-center items-center p-20"
          >
            <div id='secndDiv'
              className="flex flex-col justify-center items-center"
            >
              <h2
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  letterSpacing: "1px",
                }}
                className="text-center font-semibold pb-4"
              >
                Login
              </h2>
  
  
              {/* form div */}
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
  
                  <div  className="form-control w-96 max-w-xs">
                    
                    <input  
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered rounded-full w-full max-w-xs"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is Required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Provide a valid Email",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                   
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered rounded-full w-full max-w-xs"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
  
                  {signInError}
                  <input
                    className="btn lg:w-full w-56 rounded-full lg:max-w-xs text-white"
                    type="submit"
                    value="Login"
                  />
                </form>
              </div>
  
              <div className="divider">OR</div>
              {/* google div */}
              <div>
                <button id='googleBtn'
                  
                  onClick={() => signInWithGoogle()}
                  className="btn rounded-full  btn-outline"
                >
                  <img className="w-6 mr-3" src="https://assets.stickpng.com/thumbs/5847f9cbcef1014c0b5e48c8.png" alt="" />
                  Continue with Google
                </button>
                <p className="text-center py-2">
                  <small>
                  Don't have an account ? {" "}
                    <Link className="text-primary" to="/signup">
                      SignUp
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;