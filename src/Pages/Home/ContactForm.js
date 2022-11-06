import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

  // console.log(watch("example"));

  return (
    <div className="mt-20 text-center">
      <p className="text-xl">Contact</p>
      <h1 className="text-3xl font-semibold">
        Let us handle your <br />
        project, professionally.
      </h1>

      <div className="py-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col items-center">
          
          <div className="flex gap-5">
          <input className="bg-base-300 px-8 py-3 rounded" placeholder="First Name" {...register("firstName")} />
          <input placeholder="Last Name" className="bg-base-300 px-8 py-3 rounded" {...register("lastName", { required: true })} />
          </div>
          <div className="flex gap-5 py-3">
          <input type='email' className="bg-base-300 px-8 py-3 rounded" placeholder="Email Address" {...register("email")} />
          <input placeholder="Phone" className="bg-base-300 px-8 py-3 rounded" {...register("phone", { required: true })} />
          </div>

          <textarea placeholder="Your Message" className="bg-base-300 p-4 mb-3 rounded" name="message" id="" cols="64" rows="6" {...register("message", { required: true })}></textarea>


          {errors.email && <span>This field is required</span>}

          <input type="submit" value="Send Message" className="btn bg-blue-900 w-32 border-none normal-case font-light" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
