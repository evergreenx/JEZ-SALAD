import React from "react";

export default function SubFooter() {
  return (
    <div className="sub-footer p-40 ">
      <div className=" bg-blue-200 text-center px-20 py-16 rounded-3xl ">
        <h4 className="lg:text-xl md:text-lg text-primary leading-10">
          Our Subscribe
        </h4>

        <h2 className="text-5xl font-semibold text-menu-color my-6">
          Subscribe To Get The Latest <br /> Promo from Jez Salad
        </h2>

        <p className="text-base my-6">
          We recommended you to subscribe to our promo program, <br /> drop your
          email below to get daily update about us
        </p>

        <div className="newsletter">
          {/* input for newsletter */}

          <div class="search-box mx-auto my-auto w-full rounded-3xl sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
            <form class="flex  bg-white rounded-3xl">
              <input
                className="h-16  bg-white text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 w-full px-2 outline-none text-lg text-gray-600"
                type="text"
                placeholder="What do you want to learn?"
              />

              <button class="bg-primary text-lg text-white font-bold py-3 px-6 rounded-3xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
