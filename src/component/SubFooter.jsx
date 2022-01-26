import React from "react";

export default function SubFooter() {
  return (
    <div className="sub-footer p-40 ">
      <div className=" bg-testimonial-bg bg-newsletter-bg bg-no-repeat bg-cover  text-center px-20 py-16 rounded-3xl ">
        <h4 className="lg:text-xl md:text-lg text-primary leading-10">
          Our Subscribe
        </h4>

        <h2 className="text-5xl font-semibold text-menu-color my-6">
          Subscribe To Get The Latest <br /> Promo from Jez Salad
        </h2>

        <p className="text-base mt-5 mb-20">
          We recommended you to subscribe to our promo program, <br /> drop your
          email below to get daily update about us
        </p>

        <div className="newsletter">
          {/* input for newsletter */}

          <div class="search-box mx-auto rounded-full my-auto w-full  sm:w-full md:w-full lg:w-3/4 xl:w-3/4 lg:flex  lg:bg-white pl-5 pr-2 py-2 ">
            <input
              className="h-16 rounded-full   bg-white  py-2 font-normal border-gray-100 w-full px-2 outline-none text-lg text-gray-600"
              type="text"
              placeholder="Enter your email address"
              required
            />

            <button class="bg-primary text-lg text-white font-bold py-3 px-10 rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
