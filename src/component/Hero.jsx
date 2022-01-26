import React, { useState, useEffect } from "react";

const Hero = () => {

  return (
    <section className="">
      <div className="grid  grid-cols-1 lg:grid-cols-2 mt-28 mx-auto">
        <div className="m-5 w-10/12 lg:mx-16">
          <div className="text-primary rounded-full mb-7 p-4 w-60 font-semibold text-base text-center bg-hero-action">
            #1 Best Healthy Salad
          </div>
          <h2 className="lg:text-7xl text-4xl mx-auto mb-7 text-basic-black font-bold tracking-tighter">
            <span className="text-primary">Skip</span> The Diet, Just Eat
            Healthy With Jez Salad
          </h2>

          <p className="text-bold text-xl mb-7 w-50 text-black-text">
            Imagine you don't need a diet because we provide healthy and
            delicious food for you!
          </p>

          <div className="orderbtn mb-20">
            <button className=" px-11 rounded-full py-4 border-0 bg-primary font-semibold text-white">
              Order Food
            </button>
          </div>

          <div className="review flex ">
            <div className="mr-14">
              <p className="text-2xl font-semibold">5.000+</p>
              <p className="text-base text-black-text">Customer</p>
            </div>

            <div>
              <p className="text-2xl font-semibold mr-14">8.000+</p>

              <p className="text-base text-black-text">Delivery</p>
            </div>

            <div>
              <p className="text-2xl font-semibold">1.000+</p>

              <p className="text-base text-black-text">Ratings</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mx-auto text-center">
          <img
            alt="hero"
            // className="w-96"
            src="https://res.cloudinary.com/evergreenx/image/upload/v1644281716/Group_8442_1_pbivwf.png"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
