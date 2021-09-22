import React from "react";

const Testimonial = () => {
  return (
    <div className=" bg-testimonial-bg pt-28">
      <div className="mt-28 flex lg:flex-row flex-col lg:mx-16 mx-5">
        <div className="why-choose-us mr-20">
          <h1
            className="text lg:text-5xl text-4xl font-semibold w-96 tracking-tighter
           "
          >
            What Are People Saying
            <span className="text-primary"> About Us</span>
          </h1>

          <p className="text-xl  text-black-text w-96 mt-8">
            We are very happy if you are satisfied with our service and
            products, let's read pure reviews from customers who bought our
            products.
          </p>
        </div>

        <div className="slider flex justify-around">
          <div class="card bg-white rounded-2xl w-64 px-6 pb-8 mb-56 mt-5 mr-20">
            <img
              className="w-20 h-20 rounded-lg relative  -top-12 left-1"
              src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
              alt="avatar"
            />

            <h2>Evergreen D.</h2>
            <small className="text-gray-500 ">22 years</small>

            <p>
              The salad is fresh!!! Don't ask about the sauce again, it's really
              delicious, it's going to be routine. I recommend this salad to all
              of you guys! because they really take care of the quality.
            </p>
          </div>
  
          <div class="card bg-white rounded-2xl w-64 px-6 pb-8 mb-56 mt-5">
            <img
              className="w-20 h-20 rounded-lg relative  -top-12 left-1"
              src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
              alt="avatar"
            />

            <h2>Evergreen D.</h2>
            <small className="text-gray-500 ">22 years</small>

            <p>
              The salad is fresh!!! Don't ask about the sauce again, it's really
              delicious, it's going to be routine. I recommend this salad to all
              of you guys! because they really take care of the quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
