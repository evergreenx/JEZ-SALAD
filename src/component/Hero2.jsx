import React from "react";
import CardSection from "./CardSection";

function Hero2() {
  return (
  
  <div className="lg:mx-16 mx-5">
    <div className="mt-28 flex lg:flex-row flex-col">
      <div className="why-choose-us  w-90 mr-60">
        <h1 className="text lg:text-5xl text-4xl font-semibold">
          WHY CHOOSE US <br />
          <span className="text-primary">FOR YOUR HEALTHY FOOD</span>
        </h1>
      </div>

      <div className="w-96">
        <p className="text-xl tracking-tighter text-black-text">
          We continue to consistently choose and maintain the quality of the
          fruit served, so that it remains fresh and nutritious when you eat it.
        </p>
      </div>




    </div>


<CardSection/>
    </div>
  );
}

export default Hero2;
