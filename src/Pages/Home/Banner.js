import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center pt-10 items-center flex-row-reverse gap-10">
      <div>
        <img className="w-2/3 mx-auto mb-[-50px]"
          src="https://i.ibb.co/GRG5CJ0/pierre-chatel-innocenti-Al-Sl-E8-IAj-Zo-unsplash-1.png"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-5">
        <h1 style={{
            letterSpacing:"2px"
        }} className="text-5xl font-extrabold">We Build <br /> Your Dream</h1>
        <p className="text-sm text-justify">
          Online Easte Agency, the mordern way to sell your own home, <br /> You can
          use Griffin Residential to market your property
        </p>
        <button className="btn bg-blue-900 w-32 border-none normal-case font-light">
        Booking
      </button>
      </div>
      

      <div></div>
    </div>
  );
};

export default Banner;
