import React from "react";

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

          <p className="text-bold text-xl mb-7 w-50">
            Imagine you don't need a diet because we provide healthy and
            delicious food for you!
          </p>

          <div className="orderbtn">
            <button className=" px-11 rounded-full py-4 border-0 bg-primary font-semibold text-white">
              Order Food
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center mx-auto text-center">
          <img
            alt="hero"
            // className="w-96"
            src="https://res.cloudinary.com/evergreenx/image/upload/v1626022075/Group_8425_birxsv.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
