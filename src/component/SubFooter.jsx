import React from "react";
import Footer from "./Footer";

export default function SubFooter() {
  return (
    <>
      <div className="sub-footer p-10 lg:p-40 ">
        <div className=" bg-testimonial-bg bg-newsletter-bg bg-no-repeat bg-cover  text-center px-5 lg:px-20 py-16 rounded-3xl ">
          <h4 className="lg:text-xl  md:text-sm text-primary leading-10">
            Our Subscribe
          </h4>

          <h2 className="lg:text-5xl text-lg font-semibold text-menu-color my-6">
            Subscribe To Get The Latest <br /> Promo from Jez Salad
          </h2>

          <p className="lg:text-base text-sm mt-5 mb-20">
            We recommended you to subscribe to our promo program, <br /> drop
            your email below to get daily update about us
          </p>

          <div className="newsletter">
            {/* input for newsletter */}

            <div class="search-box mx-auto rounded-full my-auto w-full  sm:w-full md:w-full lg:w-3/4 xl:w-3/4 lg:flex  lg:bg-white pl-5 pr-2 py-2 ">
              <input
                className="h-16 rounded-full lg:mb-0   mb-10 bg-white  py-2 font-normal border-gray-100 w-full px-5 outline-none text-lg text-gray-600"
                type="text"
                placeholder="Enter your email address"
                required
              />

              <button class="bg-primary text-lg  text-white font-bold py-3 px-10 rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
